import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Category } from './category';
import { ProductVariant } from './product-variant';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Category])
  categories: Category[];

  @Field(() => [ProductVariant])
  variants: ProductVariant[];

  @Field(() => ProductVariant)
  masterVariant: ProductVariant;

  constructor(
    id: Product['id'],
    name: Product['name'],
    slug: Product['slug'],
    categories: Product['categories'],
    variants: Product['variants'],
    masterVariant: Product['masterVariant'],
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.categories = categories;
    this.variants = variants;
    this.masterVariant = masterVariant;
  }
}
