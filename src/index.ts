import { Container, ContainerModule, interfaces } from 'inversify';

import { IExeptionFilter } from './errors/exeption.filter.interface';
import { TYPES } from './types';
import { App } from './app';
import { IConfigService } from './config/config.service.interface';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/loggerService';
import { ObjectController } from './controllers/object/object.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { ConfigService } from './config/config.service';
import { IObjectController } from './controllers/object/object.controller.interface';
import { RightechObjectService } from './services/rightech-object-service/rightechObject.service';
import { IRightechObjectService } from './services/rightech-object-service/rightechObject.service.interface';

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<IRightechObjectService>(TYPES.RightechObjectService)
		.to(RightechObjectService)
		.inSingletonScope();
	bind<IObjectController>(TYPES.ObjectController).to(ObjectController).inSingletonScope();
	bind<ILogger>(TYPES.Logger).to(LoggerService).inSingletonScope();
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter).inSingletonScope();
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<App>(TYPES.Application).to(App);
});

function bootstrap() {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
}

bootstrap();
