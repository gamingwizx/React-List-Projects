import { updateSettings } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useUpdateSettings() {
    const client = useQueryClient()
    const {mutate: updateSetting, isLoading: isUpdatingSettings} = useMutation({
        mutationFn: updateSettings,
        onSuccess: (data) => {
            client.invalidateQueries()
        },
        onError: (error) => {
            console.error(error)
            throw new Error(JSON.stringify(error))
        }
    })
    return {updateSetting, isUpdatingSettings}
}

export default useUpdateSettings