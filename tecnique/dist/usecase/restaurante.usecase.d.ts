import { RestauranteService } from 'src/service/restaurante.service';
export declare class RestaurantUseCase {
    private dynamo;
    constructor(dynamo: RestauranteService);
    getAll(): Promise<{
        success: boolean;
        data: {
            name: string;
            plate: string;
        }[];
    }>;
    add(args: {
        name: string;
        plate: string;
    }): Promise<{
        success: boolean;
        data: any;
    }>;
}
