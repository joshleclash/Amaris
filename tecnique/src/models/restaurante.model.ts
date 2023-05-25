import { Injectable } from "@nestjs/common";

interface IRestaurante{
    name:string;
    plate:string;
}
@Injectable()
export class RestauranteModel{
    constructor(private args:IRestaurante){

    }
    getName(){
        return this.args.name;
    }
    getPlate(){
        return this.args.plate;
    }
}
@Injectable()
export class RestauranteCollection {
    constructor(private items:RestauranteModel[]){

    }
    getItems(){
        return this.items;
    }

}