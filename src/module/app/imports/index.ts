import { GraplQlResolverModule } from 'src/module/graphql-resolver/module';
import { configModule } from './config-module/imports';
import { devtoolsModule } from './devtools-module/imports';
import { graphqlModule } from './graph-ql-module/imports';

export const imports = [
  configModule,
  devtoolsModule,
  graphqlModule,
  GraplQlResolverModule,
];
