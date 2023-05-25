"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDb = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
class DynamoDb {
    constructor() {
        this.dbClient = new client_dynamodb_1.DynamoDBClient({ endpoint: 'http://localhost:8000' });
        this.docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(this.dbClient);
    }
    async putCommand(args) {
        console.log(this.docClient);
        console.log(args);
        return this.docClient.send(args);
    }
    async batchGetCommand(batch) {
        this.docClient.send(batch);
    }
}
exports.DynamoDb = DynamoDb;
//# sourceMappingURL=dynamo.db.js.map