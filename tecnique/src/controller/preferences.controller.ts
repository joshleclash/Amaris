import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { UserPreferencesUseCase } from 'src/usecase/userpreferences.usecase';
import { userPreferences, userPreferencesQuery } from './params/preferences.params';
import { userPreferencesResponse } from './response/preferences.response';

@Controller('preferences')
export class PreferencesController {
  constructor(private preferences: UserPreferencesUseCase) {}
  @Get()
  @ApiOkResponse({
    description: 'The user records',
    type:userPreferencesResponse,
    status:200
  })
  async getAll(@Query() query:userPreferencesQuery) {
    return this.preferences.getPreferences({name:query.user_name});
  }
  @Post('create')
  @ApiExtraModels(userPreferencesResponse)
  @ApiOkResponse({
    description: 'Create preferences of user',
    schema: { $ref: getSchemaPath(userPreferencesResponse) },
    status: 200,
  })
  async create(@Body() body: userPreferences) {
    return this.preferences.add({ user: body.user_name, ...body });
  }
}
