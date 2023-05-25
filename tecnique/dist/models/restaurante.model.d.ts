interface IRestaurante {
    name: string;
    plate: string;
}
export declare class RestauranteModel {
    private args;
    constructor(args: IRestaurante);
    getName(): string;
    getPlate(): string;
}
export declare class RestauranteCollection {
    private items;
    constructor(items: RestauranteModel[]);
    getItems(): RestauranteModel[];
}
export {};
