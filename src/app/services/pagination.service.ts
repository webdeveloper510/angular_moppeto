import { Injectable } from '@angular/core';
import { MasterPaginationEnum, Pagination, urlparamsEnum } from '../pagination/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  masterPaginationEnum = MasterPaginationEnum;
  totalRecord: any = MasterPaginationEnum.TotalRecord;
  pageSize: number = MasterPaginationEnum.PageSize;
  totalpage: number = MasterPaginationEnum.TotalPage;
  currentPage: number = MasterPaginationEnum.CurrentPage;
  pageOptions = Pagination.PageOptions;
  urlparams: string = null;
  nextPageURL: string = null;
  previousPageURL: string = null;

  pagination(PaginationPageOption = Pagination) {
    if (this.totalRecord <= PaginationPageOption.PageOptions[0])
      return PaginationPageOption.PageOptions.slice(0, 1);

    else if (this.totalRecord > PaginationPageOption.PageOptions[0] && this.totalRecord <= PaginationPageOption.PageOptions[1])
      return PaginationPageOption.PageOptions.slice(0, 2);

    else if (this.totalRecord > PaginationPageOption.PageOptions[1] && this.totalRecord <= PaginationPageOption.PageOptions[2])
      return PaginationPageOption.PageOptions.slice(0, 3);
    else if (this.totalRecord > PaginationPageOption.PageOptions[2] && this.totalRecord <= PaginationPageOption.PageOptions[3])
      return PaginationPageOption.PageOptions.slice(0, 4);
    else
      return PaginationPageOption.PageOptions;
  }

  constructor() {
    this.urlparams = urlparamsEnum.perpage + '=' + this.pageSize;
  }

  setPaginationData(res) {
    this.totalRecord = res.count;
    this.totalpage = Math.ceil(this.totalRecord / this.pageSize);
    this.pageOptions = this.pagination();
    if (res.next) {
      const next = res.next.split("?")[1];
      this.nextPageURL = next;
    } else
      this.nextPageURL = null;

    if (res.previous) {
      const previous = res.previous.split("?")[1];
      this.previousPageURL = previous;
    } else
      this.previousPageURL = null;
  }

  resetPagination(): void {
    this.urlparams = urlparamsEnum.perpage + '=' + MasterPaginationEnum.PageSize;
    this.pageSize = MasterPaginationEnum.PageSize;
    this.currentPage = MasterPaginationEnum.CurrentPage;
    this.pageOptions = Pagination.PageOptions;
    this.totalpage = MasterPaginationEnum.TotalPage;
    this.totalRecord = MasterPaginationEnum.TotalRecord;
  }
}
