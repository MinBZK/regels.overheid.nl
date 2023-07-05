export interface CmsMediaField {
  data: {
    id: number;
    attributes: Attributes;
  };
}

export interface Attributes {
  ext: string;
  url: string;
  name: string;
  hash: string;
  size: number;
  mime: string;
  width: number;
  height: number;
  caption: string;
  previewUrl: any;
  formats: Formats;
  provider: string;
  createdAt: string;
  updatedAt: string;
  provider_metadata: any;
  alternativeText: string;
}

export interface Formats {
  large?: Format;
  small?: Format;
  medium?: Format;
  thumbnail?: Format;
}

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}
