import { ConfigModule, ConfigService } from '@nestjs/config';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { Env } from 'src/config/app/type';
import { Config } from 'src/config/type';

export const devtoolsModule = DevtoolsModule.registerAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService<Config, true>) => {
    const env = configService.get('app.env', { infer: true });

    return {
      http: env === Env.Development,
    };
  },
  inject: [ConfigService],
});
