import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import {
  RestauranteCollection,
  RestauranteModel,
} from 'src/models/restaurante.model';
@Injectable()
export class RestauranteService {
  private readonly tableName = 'restaurant';
  private readonly docClient: DynamoDBClient;
  private readonly command: DynamoDBDocumentClient;
  constructor() {
    this.docClient = new DynamoDBClient({
      endpoint: `${process.env.DYNAMODB}`,
      region: `${process.env.DYNAMODB_REGION}`,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    this.command = DynamoDBDocumentClient.from(this.docClient);
  }
  async create(item: any): Promise<any> {
    try {
      const params: PutCommand = new PutCommand({
        TableName: this.tableName,
        Item: item,
      });

      let data = await this.command.send(params);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async getAll(): Promise<RestauranteCollection> {
    try {
      const command: ScanCommand = new ScanCommand({
        TableName: this.tableName,
      });
      let data = await this.command.send(command);
      let model = data.Items.map((row) => {
        return new RestauranteModel({ name: row.name, plate: row.plate });
      });
      return new RestauranteCollection(model);
    } catch (err) {
      console.log(err);
    }
  }
}
