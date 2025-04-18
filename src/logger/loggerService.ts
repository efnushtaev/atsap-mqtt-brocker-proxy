import { injectable } from 'inversify';
import { Logger } from 'tslog';

import { ILogger } from './logger.interface';
import 'reflect-metadata';

@injectable()
export class LoggerService implements ILogger {
	logger: Logger<unknown>;

	constructor() {
		this.logger = new Logger({
			type: 'pretty',
		});
	}

	log(...args: unknown[]) {
		this.logger.info(...args);
	}

	error(...args: unknown[]) {
		this.logger.error(...args);
	}

	warn(...args: unknown[]) {
		this.logger.warn(...args);
	}
}
