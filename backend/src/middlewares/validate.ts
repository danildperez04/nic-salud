import { Request, Response, NextFunction } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from '../common/exceptions/httpException';

export function validateDto(dtoClass: any) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    console.log(req.body);
    const instance = plainToInstance(dtoClass, req.body);

    if (!instance) {
      return next(new BadRequestException('Body is empty'));
    }

    const errors = await validate(instance, { whitelist: true, forbidNonWhitelisted: false });

    if (errors.length > 0) {
      const e = new BadRequestException('Validation failed');
      (e as any).details = errors;
      return next(e);
    }

    // assign the sanitized instance back to body (optional)
    req.body = instance as any;

    next();
  };
}

export default validateDto;
