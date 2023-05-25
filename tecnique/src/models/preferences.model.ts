import { Injectable } from "@nestjs/common";

interface IPreferences{
    name_user:string;
    preferences:string;
}
@Injectable()
export class PreferencesModel{
    constructor(private args:IPreferences){

    }
    getName(){
        return this.args.name_user;
    }
    getPreferences(){
        return this.args.preferences;
    }
}
@Injectable()
export class PreferencesCollection {
    constructor(private items:PreferencesModel[]){

    }
    getItems(){
        return this.items;
    }

}