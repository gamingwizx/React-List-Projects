import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabin";
import {toast} from "react-hot-toast"
function useDeleteCabin() {
    const client = useQueryClient()
    const {mutate: deleteCabins, isLoading: isDeleting} = useMutation({
        mutationFn: deleteCabin,
        onSuccess: (data) => {
            toast.success("Successfully deleted cabin")
            client.invalidateQueries({ queryKey: ["cabins"]})
        },
        onError: (error) => {
            console.error(error)
            toast.error("Error when deleting cabin")
        }
    })
    return {deleteCabins, isDeleting}
}

export default useDeleteCabin