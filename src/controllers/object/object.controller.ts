import { Response, Request } from 'express';
import { inject, injectable } from 'inversify';

import { TYPES } from '../../types';
import 'reflect-metadata';
import { IObjectController } from './object.controller.interface';
import { BaseController } from '../../common/baseController';
import { ILogger } from '../../logger/logger.interface';
import { IRightechObjectService } from '../../services/rightech-object-service/rightechObject.service.interface';
import { ControllersRoutesURL, RequestMethod } from '../../const';

@injectable()
export class ObjectController extends BaseController implements IObjectController {
	constructor(
		@inject(TYPES.Logger) private loggerService: ILogger,
		@inject(TYPES.RightechObjectService) private rightechObjectService: IRightechObjectService,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: ControllersRoutesURL.OBJECT_ID,
				method: RequestMethod.GET,
				func: this.getObjectById,
			},
			{
				path: ControllersRoutesURL.OBJECTS_ALL,
				method: RequestMethod.GET,
				func: this.getAllObjects,
			},
		]);
	}

	async getObjectById({ params }: Request, res: Response) {
		const object = await this.rightechObjectService.getObjectById(params.id);

		return this.ok(res, { ...object });
	}

	async getAllObjects(_: Request, res: Response) {
		const object = await this.rightechObjectService.getAllObjects();

		return this.ok(res, { ...object });
	}
}
