import { ConfigPayload } from './config.types'

export default ({ env }: ConfigPayload): Record<string, any> => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS')
  }
})
