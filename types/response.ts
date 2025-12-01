export type RootResponseProps<T> = {
  status: number;
  message: string;
  data: ResponseDetailProps<T>;
};

export type RootResponseByIdProps<T> = {
  status: number;
  message: string;
  data: T;
};

export type ResponseDetailProps<T> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
};
