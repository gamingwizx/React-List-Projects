import { useMutation, useQueryClient } from "@tanstack/react-query";
import {editCabin} from "../../services/apiCabin"
import {toast} from "react-hot-toast"
function useEditCabin() {
    const queryClient = useQueryClient()
    const {mutate: editCabins, isLoading: isEditing} = useMutation({
        mutationFn: editCabin,
        onSuccess: (data) => {
            toast.success("Successfully edited cabin")
            queryClient.invalidateQueries({ queryKey: ["cabins"]})
        },
        onError: (error) => {
            console.error(error)
            toast.error("Error when editing cabin")
        }
    })
    return {editCabins, isEditing}
}

export default useEditCabin