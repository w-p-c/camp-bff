import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ping {
  @Field()
  pong: string;

  constructor(pong: string) {
    this.pong = pong;
  }
}
