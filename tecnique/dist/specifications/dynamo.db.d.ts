import { BatchGetCommand } from "@aws-sdk/lib-dynamodb";
export declare class DynamoDb {
    private dbClient;
    private docClient;
    constructor();
    putCommand(args: any): Promise<any>;
    batchGetCommand(batch: BatchGetCommand): Promise<void>;
}
