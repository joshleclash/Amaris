import { PreferencesCollection } from 'src/models/preferences.model';
export declare class UserPreferencesService {
    private readonly tableName;
    private readonly docClient;
    private readonly command;
    constructor();
    create(args: {
        name: string;
        preferences: string;
    }): Promise<any>;
    getAll(): Promise<PreferencesCollection>;
}
