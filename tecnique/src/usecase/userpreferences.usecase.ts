import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RestauranteService } from 'src/service/restaurante.service';
import { UserPreferencesService } from 'src/service/user.service';

@Injectable()
export class UserPreferencesUseCase {
  constructor(
    private preferences: UserPreferencesService,
    private restaurant: RestauranteService,
  ) {}
  async add(args: { user: string; preferences: string }) {
    let data = await this.preferences.create({
      preferences: args.preferences,
      name: args.user,
    });

    return { success: true, data: data.$metadata.requestId };
  }
  async getPreferences(args: { name: string }) {
    let restaurant = await this.restaurant.getAll();
    let prefer = await this.preferences.getAll();
    let userPreferences = prefer
      .getItems()
      .filter(
        (item) => item.getName().toLowerCase() == args.name.toLowerCase(),
      );
    if (userPreferences.length == 0)
      throw new HttpException(
        `Bad request, preferences of user ${args.name} does not exists`,
        HttpStatus.BAD_REQUEST,
      );
    let restUser = [];
    userPreferences.map((user) => {
      restaurant.getItems().map((r) => {
        if (
          r.getPlate().toLocaleLowerCase() ==
          user.getPreferences().toLowerCase()
        ) {
          restUser.push(r.getName());
        }
      });
    });
    const countMap = new Map<any, number>();
    restUser.forEach((element) => {
      if (countMap.has(element)) {
        countMap.set(element, countMap.get(element)! + 1);
      } else {
        countMap.set(element, 1);
      }
    });
    let maxCount = 0;
    let mostRepeatedValue: any;
    countMap.forEach((count, value) => {
      if (count > maxCount) {
        maxCount = count;
        mostRepeatedValue = value;
      }
    });

    return {success:true,data:[{restaurant:mostRepeatedValue,quantity:maxCount}]};
  }
}
