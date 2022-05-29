import { appConfig } from './constant';

export const config = appConfig;

export const baseUrl: any = {
  user: {
    list: `${config.url.api}/users`,
  },
};
