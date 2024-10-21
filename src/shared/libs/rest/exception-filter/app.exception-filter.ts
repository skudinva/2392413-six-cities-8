import { createErrorObject } from '#shared/helpers/common.js';
import { Logger } from '#shared/libs/logger/logger.interface.js';
import { ApplicationError } from '#shared/libs/rest/types/application-error.enum.js';
import { Component } from '#shared/types/component.enum.js';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info('Register AppExceptionFilter');
  }

  public catch(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): void {
    this.logger.error(error.message, error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(createErrorObject(ApplicationError.ServiceError, error.message));
  }
}
