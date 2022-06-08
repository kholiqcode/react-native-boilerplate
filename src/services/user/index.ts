import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { functionsBaseQuery } from '../baseQuery';

const reducerPath = 'userAPI';
export const userAPI = createApi({
  reducerPath: reducerPath,
  baseQuery: functionsBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserList: builder.query<any, void>({
      query: () => `/users`,
    }),
    // updateTransaction: builder.mutation({
    //   query: (body = {}) => ({
    //     url: '/updateTransaction?isSimulation=false',
    //     method: 'PATCH',
    //     body,
    //   }),
    //   invalidatesTags: ['Transaction'],
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

export const { useGetUserListQuery } = userAPI;
export const userQueryReducer = { [reducerPath]: userAPI.reducer };
