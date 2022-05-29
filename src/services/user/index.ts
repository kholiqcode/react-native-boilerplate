import { useFetch } from '../../hooks';

// ----------------------------------------------------------------------
export const useGetUsers = () => useFetch<any>('https://dummyjson.com/users');
// ----------------------------------------------------------------------
