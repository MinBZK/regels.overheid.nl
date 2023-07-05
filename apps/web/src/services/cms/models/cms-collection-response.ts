export interface CmsCollectionResponse<TModel> {
  data: Array<{ id: number; attributes: TModel }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
