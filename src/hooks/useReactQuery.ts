import {
  useInfiniteQuery,
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  useQueryClient,
  useMutation,
} from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiRequest } from '../config';

type QueryKeyT = [string, object | undefined];

interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}

export const fetcher = <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  return ApiRequest.get(url, { params: { ...params, pageParam } }).then((res) => res);
};

export const useLoadMore = <T>(url: string | null, params?: object) => {
  const context = useInfiniteQuery<
  GetInfinitePagesInterface<T>,
  Error,
  GetInfinitePagesInterface<T>,
  QueryKeyT
  >(
    [url!, params],
    ({ queryKey, pageParam = 1, meta }: any) => fetcher({ queryKey, pageParam, meta }),
    {
      getPreviousPageParam: (firstPage: any) => firstPage.previousId ?? false,
      getNextPageParam: (lastPage: any) => {
        return lastPage.nextId ?? false;
      },
    },
  );

  return context;
};

export const usePrefetch = <T>(url: string | null, params?: object) => {
  const queryClient = useQueryClient();

  return () => {
    if (!url) {
      return;
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>([url, params], ({ queryKey, meta }: any) =>
      fetcher({ queryKey, meta }),
    );
  };
};

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyT>,
) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url!, params],
    ({ queryKey, meta }) => fetcher({ queryKey, meta }),
    {
      enabled: !!url,
      ...config,
    },
  );

  return context;
};

const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data: any) => {
      await queryClient.cancelQueries([url, params]);

      const previousData = queryClient.getQueryData([url, params]);

      queryClient.setQueryData<T>([url, params], (oldData: any) => {
        return updater ? updater(oldData, data as S) : (data as T);
      });

      return previousData;
    },
    onError: (err: any, _: any, context: any) => {
      queryClient.setQueryData([url, params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url, params]);
    },
  });
};

export const useDelete = <T>(
  url: string,
  params?: object,
  updater?: (oldData: T, id: string | number) => T,
) => {
  return useGenericMutation<T, string | number>(
    (id) => ApiRequest.delete(`${url}/${id}`),
    url,
    params,
    updater,
  );
};

export const usePost = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>((data) => ApiRequest.post(url, data), url, params, updater);
};

export const useUpdate = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>((data) => ApiRequest.patch(url, data), url, params, updater);
};
