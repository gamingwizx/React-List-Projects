import { useSearchParams } from "react-router-dom";

export default function useChangeSearchQueryParams() {
    const [searchParams, setSearchParams] = useSearchParams()
    const modifySearchQueryParams = (filterKey, value) => {
        searchParams.set(filterKey, value)
        setSearchParams(searchParams)
    }
    
    return {modifySearchQueryParams}

}