import {createCabin} from "../../services/apiCabin"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {toast} from "react-hot-toast"
function useCreateCabins() {
    const client = useQueryClient()
    const {mutate: createCabins, isLoading: isCreating} = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("Successfully created cabin")
            client.invalidateQueries({ queryKey: ["cabins"]})
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return {createCabins, isCreating}
} 

export default useCreateCabins