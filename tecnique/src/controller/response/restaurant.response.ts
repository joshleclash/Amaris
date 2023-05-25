import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class restaurantData {
  @ApiProperty()
  @IsNotEmpty()
  sucess: string;
  @ApiProperty()
  @IsNotEmpty()
  plate: string;
}
export class restaurantGetResponseDto {
  @ApiProperty()
  @IsBoolean()
  success: Boolean;
  @ApiProperty()
  @IsNumber()
  data: restaurantData[];
}
export class restaurantPostResponseDto {
  @ApiProperty()
  @IsBoolean()
  success: Boolean;
  @ApiProperty()
  @IsNumber()
  data: number;
}
