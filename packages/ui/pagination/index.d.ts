export declare function pagination(): {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  siblingCount: number;
  init(): void;
  get startIndex(): number;
  get endIndex(): number;
  get totalItems(): number;
  get pages(): number[];
  get hasPrevious(): boolean;
  get hasNext(): boolean;
  get hasFirst(): boolean;
  get hasLast(): boolean;
  goTo(page: number): void;
  next(): void;
  prev(): void;
  first(): void;
  last(): void;
};

export declare function pager(): {
  currentPage: number;
  totalPages: number;
  setPage(page: number): void;
  next(): void;
  prev(): void;
};