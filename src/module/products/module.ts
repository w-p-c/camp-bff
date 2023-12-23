import { Module } from '@nestjs/common';
import { ProductsResolver } from 'src/graph-ql/resolver/products';
import { ProductsService } from 'src/service/products/service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
