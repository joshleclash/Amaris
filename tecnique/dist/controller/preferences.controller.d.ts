import { UserPreferencesUseCase } from 'src/usecase/userpreferences.usecase';
import { userPreferences, userPreferencesQuery } from './params/preferences.params';
export declare class PreferencesController {
    private preferences;
    constructor(preferences: UserPreferencesUseCase);
    getAll(query: userPreferencesQuery): Promise<{
        success: boolean;
        data: {
            restaurant: any;
            quantity: number;
        }[];
    }>;
    create(body: userPreferences): Promise<{
        success: boolean;
        data: any;
    }>;
}
