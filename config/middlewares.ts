/* export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]; */

module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy', // here
  {
    name: 'strapi::cors',
    config: {
 
      // headers: '*',
      origin: ['http://localhost:3000', 'http://localhost:1337',
        'https://www.greatredeemerchurch.org',
        'https://content.greatredeemerchurch.org',]
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

