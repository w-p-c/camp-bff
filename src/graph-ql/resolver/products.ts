import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { ProductsService } from 'src/service/products/service';

@Resolver(() => [Product])
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async products(
    @Args({ name: 'category', type: () => ID, nullable: false })
    categoryId: Category['id'],
  ): Promise<Product[]> {
    return this.productsService.getProductsByCategory(categoryId);
  }
}
