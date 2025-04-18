import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';

import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IConfigService } from './config.service.interface';

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvParseOutput | NodeJS.ProcessEnv;

	constructor(@inject(TYPES.Logger) private logger: ILogger) {
		let result: DotenvConfigOutput = {};

		if (process.env.NODE_ENV === 'prod') {
			result = config();
		} else {
			this.logger.log('[ConfigService] Конфигруация .env загружена');
			this.config = process.env;

			return;
		}

		if (result.error) {
			this.logger.error('[ConfigService] Не удалось прочситать файл .env или он отсутствует');
		} else {
			this.logger.log('[ConfigService] Конфигруация .env загружена');
			this.config = result.parsed as DotenvParseOutput;
		}
	}

	get(key: string) {
		return this.config[key];
	}
}
