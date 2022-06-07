import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const functionsBaseQuery = () =>
  fetchBaseQuery({
    baseUrl: Config.BASE_API_URL,
    // replace this into base url backend
  });
