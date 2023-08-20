import { Inject, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

export class LoggerMiddleware implements NestMiddleware {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('finish', () => {
      const { statusCode } = res;
      const conentLength = res.get('content-length') || '';

      this.logger.info(
        `${method} ${originalUrl} ${statusCode} ${conentLength} - ${userAgent} ${ip}`,
        LoggerMiddleware.name,
      );
    });
    next();
  }
}
