import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { functionsBaseQuery } from '../baseQuery';

const reducerPath = 'productsAPI';
export const productsAPI = createApi({
  reducerPath: reducerPath,
  baseQuery: functionsBaseQuery(),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProduct: builder.query<any, string>({
      query: (query) => `/products/search?q=${query}`,
    }),
    // searchProduct: builder.mutation<any, string>({
    //   query: (query) => ({
    //     url: `/products/?q=${encodeURIComponent(query)}`,
    //     method: 'GET',
    //   }),
    //   invalidatesTags: ['Products'],
    // }),
    // getBankList: builder.mutation({
    //   query: () => ({
    //     url: '/institutions',
    //     method: 'GET',
    //     transformResponse: (response) => response.data,
    //   }),
    // }),
    // postAccount: builder.mutation({
    //   query: (body = {}) => ({
    //     url: '/addAccount',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
  }),
});

export const { useGetProductQuery } = productsAPI;
export const productsQueryReducer = { [reducerPath]: productsAPI.reducer };
