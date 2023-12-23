import { Injectable } from '@nestjs/common';
import { Category } from 'src/graph-ql/model/category';

@Injectable()
export class CategoriesService {
  public getCategories = async (): Promise<Category[]> => {
    return [
      new Category('catid1', 'catname1', 'catslug1', []),
      new Category('catid2', 'catname2', 'catslug2', []),
      new Category('catid3', 'catname3', 'catslug3', []),
    ];
  };
}
