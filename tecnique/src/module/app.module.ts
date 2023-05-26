import { Module } from '@nestjs/common';
import { RestauranteController } from '../controller/restaurante.controller';
import { RestauranteService } from '../service/restaurante.service';
import { RestaurantUseCase } from 'src/usecase/restaurante.usecase';
import { UserPreferencesUseCase } from 'src/usecase/userpreferences.usecase';
import { UserPreferencesService } from 'src/service/user.service';
import { PreferencesController } from 'src/controller/preferences.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot()],
  controllers: [RestauranteController,PreferencesController],
  providers: [RestauranteService,RestaurantUseCase,UserPreferencesService,UserPreferencesUseCase],
})
export class AppModule {}
