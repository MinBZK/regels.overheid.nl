/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type Users_Permissions_User = {
    id?: number;
    username?: string;
    email?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    createdAt?: datetime;
    updatedAt?: datetime;
};

