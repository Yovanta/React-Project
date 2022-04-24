import { useMutation } from "@apollo/client";
import {MutationUpdateData} from "../GraphQL/Mutation";
import {GetAllPengunjung} from "../GraphQL/Query";

export default function useUpdateData() {
    
    const [updateDataPengunjung, {loading: loadingMutatioUpdate}] = useMutation(MutationUpdateData, {
        refetchQueries: [GetAllPengunjung],
    });
    
    return {
        updateDataPengunjung,
        loadingMutatioUpdate
    }
}
