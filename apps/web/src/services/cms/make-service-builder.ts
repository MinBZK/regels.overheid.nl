import { makeURL } from './make-url';
import type { CmsCollectionResponse } from './models/cms-collection-response';
import type { CmsMediaField } from './models/cms-media-field';
import type { CmsSingularResponse } from './models/cms-singular-response';

type ExtractTrueValues<T> = {
  [K in keyof T]: T[K] extends true ? K : never;
}[keyof T];

type AddMediaFields<T extends string[]> = {
  [K in T[number]]: CmsMediaField;
};

const getFieldSelection = (
  defaultFields?: Array<string | number | symbol>,
  fields?: Record<string, boolean | undefined>
): string[] => {
  if (fields) return Object.keys(fields).filter((key) => fields[key]);

  if (defaultFields) return defaultFields.map(String);

  return [];
};

/**
 * This function is still a wip missing features will be added when needed
 */
export function makeServiceBuilder<TModel, TResponseKind extends 'collection' | 'singular'>() {
  // makeBuilder body
  return function builder<
    TUrlBuilderArgs extends Record<string, any>,
    TPopulateMediaFields extends string[] | undefined = undefined,
    TDefaultFields extends Array<keyof TModel> | undefined = undefined
  >(
    url: string,
    builderOptions?: {
      defaultFields?: TDefaultFields;
      populateMediaFields?: TPopulateMediaFields;
      urlBuilder?: (args: TUrlBuilderArgs) => string;
    }
  ) {
    // builder body
    return async function service<
      TFields extends Partial<Record<keyof TModel, boolean>> | undefined = undefined,
      TPickedModel = TFields extends undefined
        ? TDefaultFields extends undefined
          ? TModel
          : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Pick<TModel, TDefaultFields[number]>
        : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Pick<TModel, ExtractTrueValues<TFields>>,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      TModelWithMedia = TPickedModel & AddMediaFields<TPopulateMediaFields>,
      TReturn = TResponseKind extends 'collection'
        ? CmsCollectionResponse<TModelWithMedia>
        : CmsSingularResponse<TModelWithMedia>
    >(serviceOptions?: { fields?: TFields; args?: TUrlBuilderArgs }): Promise<TReturn> {
      // service body
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const _url = builderOptions?.urlBuilder?.(serviceOptions!.args!) || url;
      const fetchUrl = makeURL(`api/${_url}`);

      const fieldSelection = getFieldSelection(builderOptions?.defaultFields, serviceOptions?.fields);

      fieldSelection.forEach((field, i) => fetchUrl.searchParams.append(`fields[${i}]`, field));

      if (builderOptions?.populateMediaFields)
        fetchUrl.searchParams.append('populate', builderOptions.populateMediaFields.join(','));

      const response = await fetch(fetchUrl.toString());

      return response.json() as Promise<TReturn>;
    };
  };
}
