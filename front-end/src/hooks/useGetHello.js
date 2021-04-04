import { fetcher } from 'src/utils/fetchar';
import useSWR from 'swr';

const useGetHello = () => useSWR('/api/hello', fetcher);

export default useGetHello;
