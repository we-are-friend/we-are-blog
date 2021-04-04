import { fetcher } from 'src/utils/fetchar';
import useSWR from 'swr';

export const useGetBlogs = (initialData) => {
  return useSWR(`/api/blogs`, fetcher, { initialData });
};

export default useGetBlogs;
