import { IsString } from 'class-validator';

export class HelloGrettingDto {
	@IsString()
	name?: string;
}
