import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
    const {isLoading: isGettingSettings, data: settings, error} = useQuery({
        queryKey: ["settings"],
        queryFn: getSettings
    })
    return {settings, isGettingSettings, error}
}

export default useSettings