import { Query, Resolver } from '@nestjs/graphql';
import { Category } from '../model/category';
import { CategoriesService } from 'src/service/categories/service';

@Resolver(() => [Category])
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    const categories = await this.categoriesService.getCategories();

    return categories;
  }
}
