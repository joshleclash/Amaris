"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferencesUseCase = void 0;
const common_1 = require("@nestjs/common");
const restaurante_service_1 = require("../service/restaurante.service");
const user_service_1 = require("../service/user.service");
let UserPreferencesUseCase = class UserPreferencesUseCase {
    constructor(preferences, restaurant) {
        this.preferences = preferences;
        this.restaurant = restaurant;
    }
    async add(args) {
        let data = await this.preferences.create({
            preferences: args.preferences,
            name: args.user,
        });
        return { success: true, data: data.$metadata.requestId };
    }
    async getPreferences(args) {
        let restaurant = await this.restaurant.getAll();
        let prefer = await this.preferences.getAll();
        let userPreferences = prefer
            .getItems()
            .filter((item) => item.getName().toLowerCase() == args.name.toLowerCase());
        if (userPreferences.length == 0)
            throw new common_1.HttpException(`Bad request, preferences of user ${args.name} does not exists`, common_1.HttpStatus.BAD_REQUEST);
        let restUser = [];
        userPreferences.map((user) => {
            restaurant.getItems().map((r) => {
                if (r.getPlate().toLocaleLowerCase() ==
                    user.getPreferences().toLowerCase()) {
                    restUser.push(r.getName());
                }
            });
        });
        const countMap = new Map();
        restUser.forEach((element) => {
            if (countMap.has(element)) {
                countMap.set(element, countMap.get(element) + 1);
            }
            else {
                countMap.set(element, 1);
            }
        });
        let maxCount = 0;
        let mostRepeatedValue;
        countMap.forEach((count, value) => {
            if (count > maxCount) {
                maxCount = count;
                mostRepeatedValue = value;
            }
        });
        return { success: true, data: [{ restaurant: mostRepeatedValue, quantity: maxCount }] };
    }
};
UserPreferencesUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserPreferencesService,
        restaurante_service_1.RestauranteService])
], UserPreferencesUseCase);
exports.UserPreferencesUseCase = UserPreferencesUseCase;
//# sourceMappingURL=userpreferences.usecase.js.map