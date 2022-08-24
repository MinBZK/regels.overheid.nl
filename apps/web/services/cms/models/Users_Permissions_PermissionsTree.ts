/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Users_Permissions_PermissionsTree = Record<string, {
    /**
     * every controller of the api
     */
    controllers?: Record<string, Record<string, {
        enabled?: boolean;
        policy?: string;
    }>>;
}>;
