import fetcher from "@/libs/fetcher";
import useSWR from 'swr'; 

const useCurrentUser = () => {
    const { data, error, mutate,isLoading } = useSWR('/api/currentUser', fetcher)

    return {
        data,
        error,
        mutate,
        isLoading
    }
}

export default useCurrentUser; 