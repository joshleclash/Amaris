import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantUseCase } from 'src/usecase/restaurante.usecase';
import { restaurantParamsDto } from './params/restaurante.params';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { restaurantGetResponseDto, restaurantPostResponseDto } from './response/restaurant.response';

@Controller('restaurant')
export class RestauranteController {
  constructor(private restaurante: RestaurantUseCase) {}

  
  @Get()
  @ApiOkResponse({
    description: 'The user records',
    type:restaurantGetResponseDto,
    status:200
  })
  async getAll() {
    return this.restaurante.getAll();
  }
  @Post()
  @ApiOkResponse({
    description: 'The user records',
    type:restaurantPostResponseDto,
    status:200
  })
  async create(@Body() body:restaurantParamsDto) {
    return this.restaurante.add(body);
  }
  
}
