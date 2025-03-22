import { inject, injectable } from 'inversify';
import { IHelloService } from './hello.service.interface';
import { HelloGrettingDto } from './hello.dto';
import { IConfigService } from '../../config/config.service.interface';
import { TYPES } from '../../types';
import { Hello } from '../../entities/hello/hello.entity';

@injectable()
export class HelloService implements IHelloService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}

	grettings({ name }: HelloGrettingDto) {
		const newHello = new Hello(name);
		const from = this.configService.get('FROM');

		return `${newHello.greetings} From ${from}`;
	}
}
