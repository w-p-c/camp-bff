import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Image } from './image';
import { Price } from './price';
import { ProductVariantAvailability } from './product-variant-availability';

@ObjectType()
export class ProductVariant {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  sku: string;

  @Field(() => [Image])
  images: Image[];

  @Field(() => [Price])
  prices: Price[];

  availability?: ProductVariantAvailability;

  constructor(
    id: ProductVariant['id'],
    name: ProductVariant['name'],
    slug: ProductVariant['slug'],
    sku: ProductVariant['sku'],
    images: ProductVariant['images'],
    prices: ProductVariant['prices'],
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.sku = sku;
    this.images = images;
    this.prices = prices;
  }
}
