import { TYPES } from '../../types';
import { NextFunction, Response, Request } from 'express';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IHelloController } from './hello.controller.interface';
import { BaseController } from '../../common/baseController';
import { ValidateMiddleware } from '../../common/validate.middleware';
import { ILogger } from '../../logger/logger.interface';
import { IHelloService } from '../../services/hello/hello.service.interface';
import { HelloGrettingDto } from '../../services/hello/hello.dto';

@injectable()
export class HelloController extends BaseController implements IHelloController {
	constructor(
		@inject(TYPES.Logger) private loggerService: ILogger,
		@inject(TYPES.HelloService) private helloService: IHelloService,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/greeting',
				method: 'post',
				func: this.greeting,
				middlewares: [new ValidateMiddleware(HelloGrettingDto)],
			},
		]);
	}

	async greeting({ body }: Request<{}, {}, HelloGrettingDto>, res: Response, next: NextFunction) {
		const greeting = this.helloService.grettings(body);

		return this.ok(res, { greeting });
	}
}
