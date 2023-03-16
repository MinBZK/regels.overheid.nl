import { commonFetch } from './common-fetch';

export interface Attributes {
  version: string;
  versionUpdatedAt: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ApplicationMetadata {
  id: number;
  attributes: Attributes;
}

export interface GetApplicationMetadataResponse {
  data: ApplicationMetadata;
  meta: Record<string, never>;
}

export const getApplicationMetadata = async () =>
  commonFetch<GetApplicationMetadataResponse>('api/application-metadata');
