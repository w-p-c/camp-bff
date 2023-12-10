import { Module } from '@nestjs/common';

import { PingResolver } from 'src/graph-ql/resolver/ping';

@Module({
  imports: [],
  controllers: [],
  providers: [PingResolver],
})
export class GraplQlResolverModule {}
