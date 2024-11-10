import {createCabin} from "../../services/apiCabin"
function useCreateCabins(newCabin) {
    const data = createCabin(newCabin)
    return 1
} 

export default useCreateCabins