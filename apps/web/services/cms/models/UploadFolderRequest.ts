/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UploadFolderRequest = {
    data: {
        name: string;
        pathId: number;
        parent?: (number | string);
        children?: Array<(number | string)>;
        files?: Array<(number | string)>;
        path: string;
    };
};

