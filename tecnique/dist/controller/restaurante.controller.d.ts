import { RestaurantUseCase } from 'src/usecase/restaurante.usecase';
import { restaurantParamsDto } from './params/restaurante.params';
export declare class RestauranteController {
    private restaurante;
    constructor(restaurante: RestaurantUseCase);
    getAll(): Promise<{
        success: boolean;
        data: {
            name: string;
            plate: string;
        }[];
    }>;
    create(body: restaurantParamsDto): Promise<{
        success: boolean;
        data: any;
    }>;
}
