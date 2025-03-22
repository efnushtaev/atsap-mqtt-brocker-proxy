import { RightechObjectDto } from '../../dto/object/rightechObject.dto';

export interface IRightechObjectService {
	getObjectById: (id: string) => Promise<RightechObjectDto>;
	getAllObjects: () => Promise<{ data: RightechObjectDto[] }>;
}
