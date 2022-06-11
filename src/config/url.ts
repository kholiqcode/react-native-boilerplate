import { appConfig } from './constant';

export const config = appConfig;

export const baseUrl: unknown = {
  user: {
    list: `${config.url.api}/users`,
  },
};
