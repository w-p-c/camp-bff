import { ConfigModule } from '@nestjs/config';
import { config } from 'src/config/config';

import { validationSchema } from './validationSchema';

export const configModule = ConfigModule.forRoot({
  load: config,
  validationSchema,
  ignoreEnvFile: false,
});
