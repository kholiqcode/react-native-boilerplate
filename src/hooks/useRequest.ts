export default function useRequest() {
  const getPath = (path = ''): string => (path ? `/${path}` : '');

  const createUrlParamFromObj = (params = null): string => {
    if (!params) return '';
    const result: string[] = [];
    Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
    return `?${result.join('&')}`;
  };

  const getCustomUrl = (url = ''): string => url;

  const getContentType = (type: string = ''): string => {
    switch (type) {
      case 'form-data':
        return 'multipart/form-data';
      default:
        return 'application/json';
    }
  };

  const createHeader = (value: any = {}, base: any = {}) => ({
    ...base,
    ...value,
  });

  const handleAsync = async (promise: Promise<any>) => {
    try {
      const response = await promise;
      return [response, undefined];
    } catch (err) {
      return [undefined, err];
    }
  };

  return {
    getPath,
    createUrlParamFromObj,
    getCustomUrl,
    getContentType,
    createHeader,
    handleAsync,
  };
}
