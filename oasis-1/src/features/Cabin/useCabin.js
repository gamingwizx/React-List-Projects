import { useQuery } from "@tanstack/react-query";
import {getCabin} from "../../services/apiCabin"
import { useSearchParams } from "react-router-dom";

function useCabin() {
    const [searchParams, setSearchParams] = useSearchParams()
    const sort = searchParams.get("sort")?.split("-")
    const filterBy = searchParams.get("filterBy")?.split("-")
    const currentPage = searchParams.get("page")
    const pageSize = searchParams.get("pageSize")

    const {isLoading, data: cabins, error} = useQuery({
        queryKey: ['cabins', sort, filterBy, currentPage, pageSize],
        queryFn: () => getCabin({sort, filterBy, currentPage, pageSize}),
    })  

    return {cabins, isLoading, error}
}

export default useCabin
