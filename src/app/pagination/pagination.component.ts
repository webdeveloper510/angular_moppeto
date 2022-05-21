import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {PaginationService} from "../services/pagination.service";
import { MasterPaginationEnum, PaginationEvent, Pagination, urlparamsEnum } from './pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() paginationService: PaginationService;
  @Output() onPagechanged = new EventEmitter();
  @Input() masterPaginationEnum = MasterPaginationEnum;
  @Input() isDisabled: boolean = false;

  paginationEvent = PaginationEvent;
  pageOptions = Pagination.PageOptions;


  constructor() { }

  ngOnInit(): void {
  }

  pageChangeEvent(eventType: any): void {
     this.paginationService.urlparams = `${urlparamsEnum.perpage}=${this.paginationService.pageSize}`;
    switch (eventType) {
      case PaginationEvent.NextPage:
        this.paginationService.urlparams = this.paginationService.nextPageURL;
        if (this.paginationService.currentPage === this.paginationService.totalpage)
          return;
        this.paginationService.currentPage += 1;
        break;
      case PaginationEvent.PreviousPage:
        this.paginationService.urlparams = this.paginationService.previousPageURL;
        if (!this.paginationService.currentPage)
          return;
        this.paginationService.currentPage -= 1;
        break;
      default:
        break;
    }
    this.onPagechanged.emit();
  }

}
