import { ConfigPayload } from '../../config.types'

export default ({ env }: ConfigPayload): Record<string, any> => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY')
      },
      settings: {
        defaultFrom: 'no-reply@trendfy.com.br',
        defaultReplyTo: 'no-reply@trendfy.com.br'
      }
    }
  }
})
