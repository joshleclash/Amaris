import { IsNotEmpty,  IsString, } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class userPreferences {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    user_name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    preferences:string;
  
  }
  export class userPreferencesQuery {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    user_name: string;
  }