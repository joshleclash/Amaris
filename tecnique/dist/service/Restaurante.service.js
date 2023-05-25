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
exports.RestauranteService = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const common_1 = require("@nestjs/common");
const restaurante_model_1 = require("../models/restaurante.model");
let RestauranteService = class RestauranteService {
    constructor() {
        this.tableName = 'restaurant';
        this.docClient = new client_dynamodb_1.DynamoDBClient({ endpoint: 'http://localhost:8000' });
        this.command = lib_dynamodb_1.DynamoDBDocumentClient.from(this.docClient);
    }
    async create(item) {
        try {
            const params = new lib_dynamodb_1.PutCommand({
                TableName: this.tableName,
                Item: item,
            });
            let data = await this.command.send(params);
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    async getAll() {
        try {
            const command = new lib_dynamodb_1.ScanCommand({ TableName: this.tableName });
            let data = await this.command.send(command);
            let model = data.Items.map((row) => {
                return new restaurante_model_1.RestauranteModel({ name: row.name, plate: row.plate });
            });
            return new restaurante_model_1.RestauranteCollection(model);
        }
        catch (err) {
            console.log(err);
        }
    }
};
RestauranteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RestauranteService);
exports.RestauranteService = RestauranteService;
//# sourceMappingURL=restaurante.service.js.map