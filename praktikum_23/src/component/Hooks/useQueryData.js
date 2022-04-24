import { useQuery } from "@apollo/client";
import { GetAllPengunjung } from "../GraphQL/Query";

export default function useQueryData() {
  const {
    loading: loadingQuery,
    data: dataQuery,
    error: errorQuery,
  } = useQuery(GetAllPengunjung);

  return {
    loadingQuery, 
    dataQuery, 
    errorQuery
  }
}
