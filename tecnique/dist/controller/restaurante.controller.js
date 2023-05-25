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
exports.RestauranteController = void 0;
const common_1 = require("@nestjs/common");
const restaurante_usecase_1 = require("../usecase/restaurante.usecase");
const restaurante_params_1 = require("./params/restaurante.params");
const swagger_1 = require("@nestjs/swagger");
const restaurant_response_1 = require("./response/restaurant.response");
let RestauranteController = class RestauranteController {
    constructor(restaurante) {
        this.restaurante = restaurante;
    }
    async getAll() {
        return this.restaurante.getAll();
    }
    async create(body) {
        return this.restaurante.add(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'The user records',
        type: restaurant_response_1.restaurantGetResponseDto,
        status: 200
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'The user records',
        type: restaurant_response_1.restaurantPostResponseDto,
        status: 200
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurante_params_1.restaurantParamsDto]),
    __metadata("design:returntype", Promise)
], RestauranteController.prototype, "create", null);
RestauranteController = __decorate([
    (0, common_1.Controller)('restaurant'),
    __metadata("design:paramtypes", [restaurante_usecase_1.RestaurantUseCase])
], RestauranteController);
exports.RestauranteController = RestauranteController;
//# sourceMappingURL=restaurante.controller.js.map