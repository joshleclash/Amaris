import { Injectable } from '@nestjs/common';
import { RestauranteService } from 'src/service/restaurante.service';

@Injectable()
export class RestaurantUseCase {
  constructor(private dynamo: RestauranteService) {}
  async getAll() {
    let data = await this.dynamo.getAll();

    let dataResponse = data.getItems().map((row) => {
      return { name: row.getName(), plate: row.getPlate() };
    });
    return { success: true, data: dataResponse };
  }
  async add(args:{name:string,plate:string}) {
    
    let data = await this.dynamo.create({name:args.name,plate:args.plate});
    
    return {success:true,data:data.$metadata.requestId};

    
  }
}
