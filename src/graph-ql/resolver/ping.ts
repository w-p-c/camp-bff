import { Query, Resolver } from '@nestjs/graphql';
import { Ping } from '../model/ping';

@Resolver(() => Ping)
export class PingResolver {
  @Query(() => Ping, { name: 'ping' })
  ping(): Ping {
    return new Ping('pong');
  }
}
