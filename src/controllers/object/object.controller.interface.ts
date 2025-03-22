import { NextFunction, Response, Request } from 'express';

export interface IObjectController {
	getObjectById: (req: Request, res: Response, next: NextFunction) => void;
	getAllObjects: (req: Request, res: Response, next: NextFunction) => void;
}
