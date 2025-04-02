import { NextFunction, Request, Response, Router } from 'express';

import { IMiddleware } from './middleware.interface';
import { RequestMethod } from '../const';

export interface IControllerRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, RequestMethod>;
	middlewares?: IMiddleware[];
}
