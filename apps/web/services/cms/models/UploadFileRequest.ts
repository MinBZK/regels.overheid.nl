/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UploadFileRequest = {
    data: {
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: any;
        related?: Array<(number | string)>;
        folder?: (number | string);
        folderPath: string;
    };
};

