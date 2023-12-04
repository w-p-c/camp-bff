import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => {
  const env = process.env.NODE_ENV;

  return {
    env,
  };
});
