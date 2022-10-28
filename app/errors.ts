import { createInternalError, createSuccessResponse } from './middlewares/error-handler';
import { HTTP_CODES } from './constants';

export const DEFAULT_ERROR = 'default_error';
export const defaultError = createInternalError(DEFAULT_ERROR, HTTP_CODES.INTERNAL_SERVER_ERROR);

export const EXTERNAL_API_ERROR = 'external_api_error';
export const externalApiError = createInternalError(EXTERNAL_API_ERROR, HTTP_CODES.NOT_FOUND);

export const BAD_REQUEST = 'bad_request';
export const badRequest = createInternalError(BAD_REQUEST, HTTP_CODES.BAD_REQUEST);

export const SUCCESS_OPERATION = 'success_operation';
export const successOperation = createSuccessResponse(SUCCESS_OPERATION, HTTP_CODES.OK);
