import axios from 'axios';
import {useRequest} from '../hooks';

const {
  createHeader,
  createUrlParamFromObj,
  getContentType,
  getCustomUrl,
  getPath,
} = useRequest();

export const apiInstance = axios.create({
  baseURL: '',
  timeout: 60000,
  validateStatus: status => status >= 200 && status < 300,
  maxBodyLength: Infinity,
});

class ApiRequest {
  static request = async (method = 'GET', route = '', payload: any = {}) => {
    const path = getPath(payload.path);
    const params = createUrlParamFromObj(payload.params);
    const customUrl = getCustomUrl(payload.url);
    const contentType = getContentType(payload.type);
    const baseHeaders = {'Content-Type': contentType};
    const headers = createHeader(payload.headers, baseHeaders);
    const url = customUrl.length > 0 ? customUrl : route + path + params;
    const data = payload.body ? payload.body : {};
    const requestObj: any = {url, headers, method, data};

    try {
      const response = await apiInstance.request(requestObj);
      const responseData = response.data;
      if (responseData) {
        return {axiosResponse: response, ...responseData};
      }
      return {axiosResponse: response, ...response};
    } catch (err: any) {
      if (err && err.response && err.response.data) {
        throw err.response.data;
      } else if (err && err.response) {
        throw err.response;
      } else {
        throw err;
      }
    }
  };

  static get = (route: string, payload?: Object | Array<any>) =>
    ApiRequest.request('GET', route, payload);

  static put = (route: string, payload?: Object | Array<any>) =>
    ApiRequest.request('PUT', route, payload);

  static post = (route: string, payload?: Object | Array<any>) =>
    ApiRequest.request('POST', route, payload);

  static delete = (route: string, payload?: Object | Array<any>) =>
    ApiRequest.request('DELETE', route, payload);

  static patch = (route: string, payload?: Object | Array<any>) =>
    ApiRequest.request('PATCH', route, payload);
}

export default ApiRequest;
