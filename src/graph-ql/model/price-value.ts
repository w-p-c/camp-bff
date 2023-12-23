import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PriceValue {
  @Field()
  currencyCode: string;

  @Field()
  centAmount: number;

  constructor(
    currencyCode: PriceValue['currencyCode'],
    centAmount: PriceValue['centAmount'],
  ) {
    this.currencyCode = currencyCode;
    this.centAmount = centAmount;
  }
}
