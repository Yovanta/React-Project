import { useMutation } from "@apollo/client";
import {MutationInsertData} from "../GraphQL/Mutation";
import {GetAllPengunjung} from "../GraphQL/Query";

export default function useInsertData() {
    
    const [insertDataPengunjung, {loading: loadingMutationInsert}] = useMutation(MutationInsertData, {
        refetchQueries: [GetAllPengunjung],
    });
    
    return {
        insertDataPengunjung,
        loadingMutationInsert
    }
}
