import { Injectable } from '@nestjs/common';
import { Category } from 'src/graph-ql/model/category';
import { Product } from 'src/graph-ql/model/product';
import { mockProducts } from './mock';

@Injectable()
export class ProductsService {
  public getProductsByCategory = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _categoryId: Category['id'],
  ): Promise<Product[]> => {
    return mockProducts;
  };
}
