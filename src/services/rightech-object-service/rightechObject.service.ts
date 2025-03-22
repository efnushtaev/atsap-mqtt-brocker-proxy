import { inject, injectable } from 'inversify';
import axios from 'axios';

import { TYPES } from '../../types';
import { ILogger } from '../../logger/logger.interface';
import { IRightechObjectService } from './rightechObject.service.interface';
import { IConfigService } from '../../config/config.service.interface';

@injectable()
export class RightechObjectService implements IRightechObjectService {
	constructor(
		@inject(TYPES.Logger) private logger: Omit<ILogger, 'logger'>,
		@inject(TYPES.ConfigService) private config: IConfigService,
	) {}

	async getObjectById(id: string) {
		try {
			// @todo добавить типизацию для response
			const response = await axios.get(`https://dev.rightech.io/api/v1/objects/${id}`, {
				headers: {
					Authorization: `Bearer ${this.config.get('RIGHTECH_API_TOKEN')}`,
				},
			});
			this.logger.log('Succes fetching data:', response);
			return response.data;
		} catch (error) {
			this.logger.error('Error fetching data:', error);
			return error as Error;
		}
	}

	async getAllObjects() {
		try {
			// @todo добавить типизацию для response
			const response = await axios.get('https://dev.rightech.io/api/v1/objects', {
				headers: {
					Authorization: `Bearer ${this.config.get('RIGHTECH_API_TOKEN')}`,
				},
			});

			this.logger.log('Succes fetching data:', response);
			return response.data;
		} catch (error) {
			this.logger.error('Error fetching data:', error);
			return error as Error;
		}
	}
}
