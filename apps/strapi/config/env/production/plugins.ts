export default ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "no-reply@trendfy.com.br",
        defaultReplyTo: "no-reply@trendfy.com.br",
      },
    },
  },
});
