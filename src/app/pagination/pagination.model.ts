export class Pagination {
    public static PageOptions = [10, 20, 30, 40, 50];
}

export enum MasterPaginationEnum {
    PageSize = 10,
    TotalRecord = 1000,
    PreviousPageIndex = null,
    NextPageIndex = 1,
    TotalPage = 100,
    CurrentPage = 1
}

export enum PaginationEvent {
    OptionChange = "OptionChange",
    NextPage = "NextPage",
    PreviousPage = "PreviousPage",
}

export class PaginationModel {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
}

export enum urlparamsEnum {
    perpage = "perpage"
}