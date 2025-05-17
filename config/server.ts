export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  emitErrors: false,
  url: env('PUBLIC_URL', 'https://content.greatredeemerchurch.org'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
  transfer: {
    remote: {
      enabled: false,
    },
  },
  logger: {
    updates: {
      enabled: false,
    },
    startup: {
      enabled: false,
    },
  },
});
