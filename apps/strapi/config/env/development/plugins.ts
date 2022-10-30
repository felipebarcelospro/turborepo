import { ConfigPayload } from '../../config.types'

export default ({ env }: ConfigPayload): Record<string, any> => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.mailtrap.io'),
        port: env('SMTP_PORT', 2525),
        auth: {
          user: env('SMTP_USERNAME', 'dbfb2cf545c354'),
          pass: env('SMTP_PASSWORD', '7ac8ab25e1e14b')
        }
      },
      settings: {
        defaultFrom: 'no-reply@trendfy.com.br',
        defaultReplyTo: 'no-reply@trendfy.com.br'
      }
    }
  }
})
