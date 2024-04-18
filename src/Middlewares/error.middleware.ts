// =================== packages ====================
import { NextFunction, Request, Response } from 'express';
// ======================================================
import { HttpException } from '../Exceptions/httpException';
// import { logger } from '@utils/logger';
import { generalResponse } from '../Helper/common.helper';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    // logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    return generalResponse(res, [], message, 'error', false, status);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
