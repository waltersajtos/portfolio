module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'waltersajtos@outlook.com',
      defaultReplyTo: 'waltersajtos@outlook.com',
      testAddress: 'waltersajtos@outlook.com',
    },
  },
  // ...
});
