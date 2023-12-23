import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Image {
  @Field()
  url: string;

  @Field({ nullable: true })
  label?: string;

  constructor(url: Image['url']) {
    this.url = url;
  }
}
