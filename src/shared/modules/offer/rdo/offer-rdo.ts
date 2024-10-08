import { City } from '#src/shared/types/city.type.js';
import { GoodType } from '#src/shared/types/good-type.type.js';
import { Location } from '#src/shared/types/location.type.js';
import { OfferType } from '#src/shared/types/offer-type.enum.js';
import { Ref } from '@typegoose/typegoose';
import { UserEntity } from '../../user/user-entity.js';
import { OfferEntity } from '../offer-entity.js';

type offerExcludeType = 'id' | '_id' | 'createdAt' | 'updatedAt';
export class OfferRdo implements Omit<OfferEntity, offerExcludeType> {
  public title: string;
  public description: string;
  public createdDate: Date;
  public city: City;
  public previewImage: string;
  public images: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: OfferType;
  public bedrooms: number;
  public maxAdults: number;
  public price: number;
  public goods: GoodType[];
  public userId: Ref<UserEntity>;
  public location: Location;
}
