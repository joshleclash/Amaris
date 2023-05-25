import { IsArray, IsBoolean, IsNotEmpty,  IsObject,  IsString, } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class userPreferencesResponse {
    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    success: boolean;
  }