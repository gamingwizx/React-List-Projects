import { useQuery, useQueryClient } from "@tanstack/react-query";
import {getCabin} from "../../services/apiCabin"

function useCabin() {
    const queryClient = useQueryClient()

    const {isLoading, data: cabins, error} = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabin,
    })  

    return {cabins, isLoading, error}
}

export default useCabin
