import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PriceValue } from './price-value';

@ObjectType()
export class Price {
  @Field(() => ID)
  id: string;

  @Field(() => PriceValue)
  value: PriceValue;

  constructor(id: Price['id'], value: Price['value']) {
    this.id = id;
    this.value = value;
  }
}
