"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const restaurante_controller_1 = require("../controller/restaurante.controller");
const restaurante_service_1 = require("../service/restaurante.service");
const restaurante_usecase_1 = require("../usecase/restaurante.usecase");
const userpreferences_usecase_1 = require("../usecase/userpreferences.usecase");
const user_service_1 = require("../service/user.service");
const preferences_controller_1 = require("../controller/preferences.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [restaurante_controller_1.RestauranteController, preferences_controller_1.PreferencesController],
        providers: [restaurante_service_1.RestauranteService, restaurante_usecase_1.RestaurantUseCase, user_service_1.UserPreferencesService, userpreferences_usecase_1.UserPreferencesUseCase],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map