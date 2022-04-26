import { gql } from "@apollo/client";

export const MutationDeleteData = gql`
  mutation deletePengunjung($id: uuid!) {
    delete_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

export const MutationUpdateData = gql`
  mutation updatePengunjung($id: uuid!, $nama: String!, $umur: Int!, $jenis_kelamin: String!) {
    update_pengunjung_by_pk(pk_columns: { id: $id }, _set: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

export const MutationInsertData = gql`
  mutation insertPengunjung($object: pengunjung_insert_input!) {
    insert_pengunjung_one(object: $object) {
      id
    }
  }
`;
