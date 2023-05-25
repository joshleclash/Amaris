import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  BatchGetCommand,
  ScanCommand,
  DynamoDBDocumentClient,
  PutCommand,
} from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import { PreferencesCollection, PreferencesModel } from 'src/models/preferences.model';
@Injectable()
export class UserPreferencesService {
  private readonly tableName = 'user_preferences';
  private readonly docClient: DynamoDBClient;
  private readonly command: DynamoDBDocumentClient;
  constructor() {
    this.docClient = new DynamoDBClient({ endpoint: 'http://localhost:8000' });
    this.command = DynamoDBDocumentClient.from(this.docClient);
  }
  async create(args:{name:string,preferences:string}): Promise<any> {
    try {
      const params: PutCommand = new PutCommand({
        TableName: this.tableName,
        Item: { name_user: args.name, preferences: args.preferences },
      });

      let data = await this.command.send(params);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async getAll(): Promise<PreferencesCollection> {
    try {
      const command: ScanCommand = new ScanCommand({ TableName: this.tableName });
      let data = await this.command.send(command);
      let model = data.Items.map((row) => {
        return new PreferencesModel({ name_user: row.name_user, preferences: row.preferences });
      });
      return new PreferencesCollection(model);
    } catch (err) {
      console.log(err);
    }
  }
  
  
}
