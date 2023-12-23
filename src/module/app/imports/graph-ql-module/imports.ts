import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Env } from 'src/config/app/type';
import { Config } from 'src/config/type';
import { CategoriesModule } from 'src/module/categories/module';
import { ProductsModule } from 'src/module/products/module';

export const graphqlModule = GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  imports: [ConfigModule, CategoriesModule, ProductsModule],
  useFactory: (configService: ConfigService<Config>) => {
    const env = configService.get('app.env', { infer: true });

    return {
      playground: env === Env.Development,
      autoSchemaFile: true,
      sortSchema: true,
    };
  },
  inject: [ConfigService],
});
