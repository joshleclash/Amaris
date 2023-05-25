import { RestauranteCollection } from 'src/models/restaurante.model';
export declare class RestauranteService {
    private readonly tableName;
    private readonly docClient;
    private readonly command;
    constructor();
    create(item: any): Promise<any>;
    getAll(): Promise<RestauranteCollection>;
}
