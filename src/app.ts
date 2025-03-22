import { TYPES } from './types';
import { Server } from 'http';
import express, { Express } from 'express';

import { ILogger } from './logger/logger.interface';
import { inject, injectable } from 'inversify';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { HelloController } from './controllers/hello/hello.controller';

@injectable()
export class App {
	app: Express;
	port: number;
	server: Server;

	constructor(
		@inject(TYPES.Logger) private logger: ILogger,
		@inject(TYPES.HelloController) private helloController: HelloController,
		@inject(TYPES.ExeptionFilter) private exeptionFilter: IExeptionFilter,
	) {
		this.app = express();
		this.port = 8001;
	}

	private useMiddleware(): void {
		this.app.use(bodyParser.json());
	}

	private useRoutes(): void {
		this.app.use('/hello', this.helloController.router);
	}

	private useExeptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRoutes();
		this.useExeptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
