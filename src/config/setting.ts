/**
 * Basic Setting Variables Define
 */
export const BaseSetting = {
  name: 'boilerplate',
  displayName: 'Boilerplate',
  appVersion: '1.0.0',
  defaultLanguage: 'id',
  languageSupport: ['en', 'id'],
  firstScreen: 'Splash',
  resourcesLanguage: {
    en: {
      translation: require('../lang/en.json'),
    },
    id: {
      translation: require('../lang/id.json'),
    },
  },
};
