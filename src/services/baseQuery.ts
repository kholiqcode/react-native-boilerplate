import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from 'react-native-dotenv';

export const functionsBaseQuery = () =>
  fetchBaseQuery({
    baseUrl: BASE_API_URL,
    // replace this into base url backend
  });
