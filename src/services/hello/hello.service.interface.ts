import { HelloGrettingDto } from './hello.dto';

export interface IHelloService {
	grettings: (dto: HelloGrettingDto) => string;
}
