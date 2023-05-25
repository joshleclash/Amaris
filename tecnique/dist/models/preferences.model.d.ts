interface IPreferences {
    name_user: string;
    preferences: string;
}
export declare class PreferencesModel {
    private args;
    constructor(args: IPreferences);
    getName(): string;
    getPreferences(): string;
}
export declare class PreferencesCollection {
    private items;
    constructor(items: PreferencesModel[]);
    getItems(): PreferencesModel[];
}
export {};
