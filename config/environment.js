/* eslint-env node */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'git-tool',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    torii: {
      sessionServiceName: 'session',
      allowUnsafeRedirect: true,
      providers: {
        'github-oauth2': {
          apiKey: '652fb4037bede8a41e00',
          redirectUri: 'http://localhost:4200'
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }

  // ENV.torii = {
  //   providers: {
  //     'github-oauth2': {
  //       apiKey: '652fb4037bede8a41e00',
  //       redirectUri: 'http://localhost:4200/oauth2callback'
  //     }
  //   }
  // }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {

  }

  ENV.torii.providers['github-oauth2'].tokenExchangeUri = 'http://localhost:4200/api/token'

  return ENV
}
