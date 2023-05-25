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
exports.RestaurantUseCase = void 0;
const common_1 = require("@nestjs/common");
const restaurante_service_1 = require("../service/restaurante.service");
let RestaurantUseCase = class RestaurantUseCase {
    constructor(dynamo) {
        this.dynamo = dynamo;
    }
    async getAll() {
        let data = await this.dynamo.getAll();
        let dataResponse = data.getItems().map((row) => {
            return { name: row.getName(), plate: row.getPlate() };
        });
        return { success: true, data: dataResponse };
    }
    async add(args) {
        let data = await this.dynamo.create({ name: args.name, plate: args.plate });
        return { success: true, data: data.$metadata.requestId };
    }
};
RestaurantUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [restaurante_service_1.RestauranteService])
], RestaurantUseCase);
exports.RestaurantUseCase = RestaurantUseCase;
//# sourceMappingURL=restaurante.usecase.js.map