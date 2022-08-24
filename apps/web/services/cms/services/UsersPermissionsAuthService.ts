/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { enum } from '../models/enum';
import type { Error } from '../models/Error';
import type { Users_Permissions_UserRegistration } from '../models/Users_Permissions_UserRegistration';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersPermissionsAuthService {

    /**
     * Login with a provider
     * Redirects to provider login before being redirect to /auth/{provider}/callback
     * @returns Error Error
     * @throws ApiError
     */
    public static getConnect-(.*)(): CancelablePromise<Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connect/(.*)',
            errors: {
                301: `Redirect response`,
            },
        });
    }

    /**
     * Local login
     * Returns a jwt token and user info
     * @param requestBody
     * @returns Users_Permissions_UserRegistration Connection
     * @returns Error Error
     * @throws ApiError
     */
    public static postAuthLocal(
        requestBody: {
            identifier?: string;
            password?: string;
        },
    ): CancelablePromise<Users_Permissions_UserRegistration | Error> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/local',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Register a user
     * Returns a jwt token and user info
     * @param requestBody
     * @returns Users_Permissions_UserRegistration Successfull registration
     * @returns Error Error
     * @throws ApiError
     */
    public static postAuthLocalRegister(
        requestBody: {
            username?: string;
            email?: string;
            password?: string;
        },
    ): CancelablePromise<Users_Permissions_UserRegistration | Error> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/local/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Default Callback from provider auth
     * @returns Users_Permissions_UserRegistration Returns a jwt token and user info
     * @returns Error Error
     * @throws ApiError
     */
    public static getAuthCallback(): CancelablePromise<Users_Permissions_UserRegistration | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/{provider}/callback',
        });
    }

    /**
     * Send rest password email
     * @param requestBody
     * @returns any Returns ok
     * @returns Error Error
     * @throws ApiError
     */
    public static postAuthForgotPassword(
        requestBody: {
            email?: string;
        },
    ): CancelablePromise<{
        ok?: enum;
    } | Error> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/forgot-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Rest user password
     * @param requestBody
     * @returns Users_Permissions_UserRegistration Returns a jwt token and user info
     * @returns Error Error
     * @throws ApiError
     */
    public static postAuthResetPassword(
        requestBody: {
            password?: string;
            passwordConfirmation?: string;
            code?: string;
        },
    ): CancelablePromise<Users_Permissions_UserRegistration | Error> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update user's own password
     * @param requestBody
     * @returns Users_Permissions_UserRegistration Returns a jwt token and user info
     * @returns Error Error
     * @throws ApiError
     */
    public static postAuthChangePassword(
        requestBody: {
            password?: string;
            currentPassword?: string;
            passwordConfirmation?: string;
        },
    ): CancelablePromise<Users_Permissions_UserRegistration | Error> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Confirm user email
     * @param confirmation confirmation token received by email
     * @returns Error Error
     * @throws ApiError
     */
    public static getAuthEmailConfirmation(
        confirmation?: any,
    ): CancelablePromise<Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/email-confirmation',
            query: {
                'confirmation': confirmation,
            },
            errors: {
                301: `Redirects to the configure email confirmation redirect url`,
            },
        });
    }

    /**
     * Send confirmation email
     * @param requestBody
     * @returns any Returns email and boolean to confirm email was sent
     * @returns Error Error
     * @throws ApiError
     */
    public static postAuthSendEmailConfirmation(
        requestBody: {
            email?: string;
        },
    ): CancelablePromise<{
        email?: string;
        sent?: enum;
    } | Error> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/send-email-confirmation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
