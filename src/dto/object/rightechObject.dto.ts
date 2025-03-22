import { IsString } from 'class-validator';

export class RightechObjectDto {
	@IsString()
	model: string;
	id: string;
	name: string;
}
