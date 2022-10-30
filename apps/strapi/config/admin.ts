import { ConfigPayload } from './config.types'

export default ({ env }: ConfigPayload): Record<string, any> => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET')
  },
  apiToken: {
    salt: env('API_TOKEN_SALT')
  }
})
