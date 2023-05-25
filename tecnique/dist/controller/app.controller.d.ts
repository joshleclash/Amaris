import { RestauranteUseCase } from 'src/usecase/restaurante.usecase';
export declare class AppController {
    private restaurante;
    constructor(restaurante: RestauranteUseCase);
    getHello(): Promise<any>;
}
