import { OfferEntity } from '#shared/modules/offer/offer-entity.js';
import { UserRdo } from '#shared/modules/user/rdo/user-rdo.js';
import { City } from '#shared/types/city.type.js';
import { GoodType } from '#shared/types/good-type.type.js';
import { Location } from '#shared/types/location.type.js';
import { OfferType } from '#shared/types/offer-type.enum.js';
import { Expose, Type } from 'class-transformer';

type OfferExcludeType =
  | '_id'
  | 'userId'
  | 'createdDate'
  | 'createdAt'
  | 'updatedAt';
export class OfferRdo implements Omit<OfferEntity, OfferExcludeType> {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public createdDate: string;

  @Expose()
  public city: City;

  @Expose()
  public previewImage: string;

  @Expose()
  public images: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: OfferType;

  @Expose()
  public bedrooms: number;

  @Expose()
  public maxAdults: number;

  @Expose()
  public price: number;

  @Expose()
  public goods: GoodType[];

  @Expose({ name: 'userId' })
  @Type(() => UserRdo)
  public user: UserRdo;

  @Expose()
  public location: Location;

  @Expose()
  public reviewsCount: number;
}
