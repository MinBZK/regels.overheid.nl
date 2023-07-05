export interface CmsSingularResponse<TModel> {
  data: {
    id: number;
    attributes: TModel;
  };
  meta: Record<string, never>;
}
