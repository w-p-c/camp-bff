import { Category } from 'src/graph-ql/model/category';
import { Image } from 'src/graph-ql/model/image';
import { Price } from 'src/graph-ql/model/price';
import { PriceValue } from 'src/graph-ql/model/price-value';
import { Product } from 'src/graph-ql/model/product';
import { ProductVariant } from 'src/graph-ql/model/product-variant';

export const mockProducts = [
  new Product(
    'prodid1',
    'prodname1',
    'prodslug1',
    [
      new Category('catid4', 'catname4', 'catslug4', []),
      new Category('catid5', 'catname5', 'catslug5', []),
    ],
    [
      new ProductVariant(
        'pvarid1',
        'pvarname1',
        'pvarslug1',
        'pvarsku1',
        [
          new Image(
            'https://cdn.shopify.com/s/files/1/0022/0620/3948/files/FW_22_02_0130_Final_73573114-a603-4e4b-a20c-51ed2a0d924f.jpg?v=1667488879',
          ),
          new Image(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIA8a82HbsyoR2Xj9Q5r7CYVpj6AxdoLhl6bZ1SyU9DB_szAU4IZH1URW4HiOvecQvx4&usqp=CAU',
          ),
        ],
        [
          new Price('priceid1', new PriceValue('UAH', 400)),
          new Price('priceid2', new PriceValue('USD', 125)),
        ],
      ),
    ],
    new ProductVariant(
      'pvarid2',
      'pvarname2',
      'pvarslug2',
      'pvarsku2',
      [
        new Image(
          'https://www.youngla.com/cdn/shop/products/Johnny_Black_Friday-2272_42e9a47a-914c-415d-be97-517b1ff2d009_1024x.jpg?v=1668048412',
        ),
        new Image(
          'https://www.freshcotton.com/cdn-cgi/image/width=3840,format=avif,quality=75/https://resources.freshcotton.com/media/74/6f/d0/1693314187/cbjskbcaj-6.jpg',
        ),
      ],
      [
        new Price('priceid4', new PriceValue('UAH', 500)),
        new Price('priceid5', new PriceValue('USD', 225)),
      ],
    ),
  ),
  new Product(
    'prodid2',
    'prodname2',
    'prodslug2',
    [
      new Category('catid6', 'catname6', 'catslug6', []),
      new Category('catid7', 'catname7', 'catslug7', []),
    ],
    [
      new ProductVariant(
        'pvarid3',
        'pvarname3',
        'pvarslug3',
        'pvarsku3',
        [
          new Image(
            'https://cdn.shopify.com/s/files/1/0022/0620/3948/files/FW_22_02_0130_Final_73573114-a603-4e4b-a20c-51ed2a0d924f.jpg?v=1667488879',
          ),
          new Image(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIA8a82HbsyoR2Xj9Q5r7CYVpj6AxdoLhl6bZ1SyU9DB_szAU4IZH1URW4HiOvecQvx4&usqp=CAU',
          ),
        ],
        [
          new Price('priceid6', new PriceValue('UAH', 600)),
          new Price('priceid7', new PriceValue('USD', 325)),
        ],
      ),
    ],
    new ProductVariant(
      'pvarid4',
      'pvarname4',
      'pvarslug4',
      'pvarsku4',
      [
        new Image(
          'https://www.lulus.com/blog/wp-content/uploads/2022/01/marwah.jpg',
        ),
        new Image(
          'https://www.lulus.com/blog/fashion/plaid-skirt-outfits/attachment/1941976/',
        ),
      ],
      [
        new Price('priceid8', new PriceValue('UAH', 700)),
        new Price('priceid9', new PriceValue('USD', 425)),
      ],
    ),
  ),
];
