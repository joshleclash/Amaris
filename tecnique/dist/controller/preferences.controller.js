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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const userpreferences_usecase_1 = require("../usecase/userpreferences.usecase");
const preferences_params_1 = require("./params/preferences.params");
const preferences_response_1 = require("./response/preferences.response");
let PreferencesController = class PreferencesController {
    constructor(preferences) {
        this.preferences = preferences;
    }
    async getAll(query) {
        return this.preferences.getPreferences({ name: query.user_name });
    }
    async create(body) {
        return this.preferences.add(Object.assign({ user: body.user_name }, body));
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'The user records',
        type: preferences_response_1.userPreferencesResponse,
        status: 200
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [preferences_params_1.userPreferencesQuery]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiExtraModels)(preferences_response_1.userPreferencesResponse),
    (0, swagger_1.ApiOkResponse)({
        description: 'Create preferences of user',
        schema: { $ref: (0, swagger_1.getSchemaPath)(preferences_response_1.userPreferencesResponse) },
        status: 200,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [preferences_params_1.userPreferences]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "create", null);
PreferencesController = __decorate([
    (0, common_1.Controller)('preferences'),
    __metadata("design:paramtypes", [userpreferences_usecase_1.UserPreferencesUseCase])
], PreferencesController);
exports.PreferencesController = PreferencesController;
//# sourceMappingURL=preferences.controller.js.map