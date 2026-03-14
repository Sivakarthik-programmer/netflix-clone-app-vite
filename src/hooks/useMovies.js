import { useQuery } from '@tanstack/react-query'
import { tmdbClient, ENDPOINT_PARAMS } from '../api/tmdb'

export function useMovies(endpoint, endpointKey) {
    return useQuery({
        queryKey: ['movies', endpoint, endpointKey],
        queryFn: async () => {
            const { data } = await tmdbClient.get(endpoint, {
                params: ENDPOINT_PARAMS[endpointKey] ?? {},
            })
            return data.results ?? []
        },
        staleTime: 5 * 60 * 1000,
        enabled: !!endpoint,
    })
}