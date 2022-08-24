/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UsersPermissionsUserRequest = {
    data: {
        username: string;
        email: string;
        provider?: string;
        password?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: (number | string);
    };
};

