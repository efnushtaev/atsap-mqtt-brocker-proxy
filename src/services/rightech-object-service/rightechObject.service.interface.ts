import { RightechObjectDto } from '../../dto/object/rightechObject.dto';

export interface IRightechObjectService {
	getObjectById: (id: string) => Promise<{ data: RightechObjectDto }>;
	getAllObjects: () => Promise<{ data: RightechObjectDto[] }>;
}
