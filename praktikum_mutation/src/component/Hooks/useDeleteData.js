import { useMutation } from "@apollo/client";
import {MutationDeleteData} from "../GraphQL/Mutation";
import {GetAllPengunjung} from "../GraphQL/Query";

export default function useDeleteData() {
    
    const [hapusDataPengunjung, {loading: loadingMutationDelete}] = useMutation(MutationDeleteData, {
        refetchQueries: [GetAllPengunjung],
    });
    
    return {
        hapusDataPengunjung,
        loadingMutationDelete
    }
}
