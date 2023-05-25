import { RestauranteService } from 'src/service/restaurante.service';
import { UserPreferencesService } from 'src/service/user.service';
export declare class UserPreferencesUseCase {
    private preferences;
    private restaurant;
    constructor(preferences: UserPreferencesService, restaurant: RestauranteService);
    add(args: {
        user: string;
        preferences: string;
    }): Promise<{
        success: boolean;
        data: any;
    }>;
    getPreferences(args: {
        name: string;
    }): Promise<{
        success: boolean;
        data: {
            restaurant: any;
            quantity: number;
        }[];
    }>;
}
