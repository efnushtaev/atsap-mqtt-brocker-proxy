import { IsString } from 'class-validator';

export class AtsapObjectDto {
	@IsString()
	model: string;
	id: string;
	name: string;
}
