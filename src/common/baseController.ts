import { Router, Response } from 'express';
import { injectable } from 'inversify';

import { ILogger } from './../logger/logger.interface';
import 'reflect-metadata';
import { IControllerRoute } from './route.interface';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor(private logger: ILogger) {
		this._router = Router();
	}

	get router() {
		return this._router;
	}

	public send<T>(
		res: Response,
		code: number,
		message: T,
	): Response<unknown, Record<string, unknown>> {
		res.type('application/json');
		return res.status(code).json(message);
	}

	protected ok<T>(res: Response, message: T) {
		return this.send<T>(res, 200, message);
	}

	protected bindRoutes(routes: IControllerRoute[]) {
		for (const route of routes) {
			this.logger.log(`[${route.method}] ${route.path}`);
			const middleware = route.middlewares?.map((m) => m.execute.bind(m));
			const handler = route.func.bind(this);
			const pipeline = middleware ? [...middleware, handler] : handler;
			this.router[route.method](route.path, pipeline);
		}
	}
}
