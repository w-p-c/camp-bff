import { Module } from '@nestjs/common';
import { CategoriesResolver } from 'src/graph-ql/resolver/categories';
import { CategoriesService } from 'src/service/categories/service';

@Module({
  imports: [],
  controllers: [],
  providers: [CategoriesService, CategoriesResolver],
})
export class CategoriesModule {}
