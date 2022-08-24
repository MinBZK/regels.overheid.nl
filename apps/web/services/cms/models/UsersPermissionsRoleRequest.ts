/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UsersPermissionsRoleRequest = {
    data: {
        name: string;
        description?: string;
        type?: string;
        permissions?: Array<(number | string)>;
        users?: Array<(number | string)>;
    };
};

