import { NextFunction, Response, Request } from 'express';

export interface IHelloController {
	greeting: (req: Request, res: Response, next: NextFunction) => void;
}
