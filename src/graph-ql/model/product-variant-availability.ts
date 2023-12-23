import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantAvailability {
  @Field()
  isOnStock: boolean;

  @Field(() => Int)
  availableQty: number;

  constructor(
    isOnStock: ProductVariantAvailability['isOnStock'],
    availableQty: ProductVariantAvailability['availableQty'],
  ) {
    this.isOnStock = isOnStock;
    this.availableQty = availableQty;
  }
}
