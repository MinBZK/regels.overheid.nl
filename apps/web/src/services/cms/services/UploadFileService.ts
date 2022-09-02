/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadFileListResponse } from '../models/UploadFileListResponse';
import type { UploadFileResponse } from '../models/UploadFileResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UploadFileService {
  /**
   * @param sort Sort by attributes ascending (asc) or descending (desc)
   * @param paginationWithCount Retun page/pageSize (default: true)
   * @param paginationPage Page number (default: 0)
   * @param paginationPageSize Page size (default: 25)
   * @param paginationStart Offset value (default: 0)
   * @param paginationLimit Number of entities to return (default: 25)
   * @param fields Fields to return (ex: title,author)
   * @param populate Relations to return
   * @returns UploadFileListResponse OK
   * @throws ApiError
   */
  public static getUploadFiles(
    sort?: string,
    paginationWithCount?: boolean,
    paginationPage?: number,
    paginationPageSize?: number,
    paginationStart?: number,
    paginationLimit?: number,
    fields?: string,
    populate?: string
  ): CancelablePromise<UploadFileListResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/upload/files',
      query: {
        sort: sort,
        'pagination[withCount]': paginationWithCount,
        'pagination[page]': paginationPage,
        'pagination[pageSize]': paginationPageSize,
        'pagination[start]': paginationStart,
        'pagination[limit]': paginationLimit,
        fields: fields,
        populate: populate,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * @param id
   * @returns UploadFileResponse OK
   * @throws ApiError
   */
  public static getUploadFilesId(id: string): CancelablePromise<UploadFileResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/upload/files/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * @param id
   * @returns number OK
   * @throws ApiError
   */
  public static deleteUploadFilesId(id: string): CancelablePromise<number> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/upload/files/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }
}
