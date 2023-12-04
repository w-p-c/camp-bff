import * as Joi from 'joi';

import { Env } from 'src/config/app/type';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(Env))
    .required(),
});
