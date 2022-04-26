import { gql } from "@apollo/client";

export const GetAllPengunjung = gql`
    query getPengunjung {
        pengunjung {
          id
          nama
          umur
          jenis_kelamin
        }
    }
`

export const getPengunjungById = gql`
query getPengunjungId($id: uuid!) {
  pengunjung(where: { id: { _eq: $id } }) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
