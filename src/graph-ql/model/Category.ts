import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Category])
  ancestors: Category[];

  @Field(() => Category, { nullable: true })
  parent?: Category;

  constructor(
    id: Category['id'],
    name: Category['name'],
    slug: Category['slug'],
    ancestors: Category['ancestors'],
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.ancestors = ancestors;
  }
}
