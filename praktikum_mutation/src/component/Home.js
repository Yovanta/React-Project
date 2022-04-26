import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";
import Header from "./Header";
import Loading from "../assets/Loading.icon";

import useQueryData from "./Hooks/useQueryData";
import useDeleteData from "./Hooks/useDeleteData"
import useInsertData from "./Hooks/useInsertData";
import useUpdateData from "./Hooks/useUpdateData";

const initialValue = [
  {
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 19,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Fahmi",
    umur: 19,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Rina",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Ari",
    umur: 19,
    jenisKelamin: "Pria",
  },
];

function Home() {
  const [isUpdate, setIsUpdate] = useState(false);
  // const [dataUpdate, setDataUpdate] = useState({
  //   nama: "",
  //   umur: "",
  //   jenisKelamin: "Pria",
  // });

  const [data, setData] = useState(initialValue);

  const {loadingQuery, dataQuery, errorQuery} = useQueryData();
  // console.log(dataQuery);
  
  const {hapusDataPengunjung,
    loadingMutationDelete} = useDeleteData() 

  const {insertDataPengunjung,
    loadingMutationInsert} = useInsertData()  

  const {updateDataPengunjung,
    loadingMutatioUpdate} = useUpdateData()  



  if (loadingQuery || loadingMutationDelete || loadingMutationInsert ||  loadingMutatioUpdate ) {
    return <Loading />;
  }

  if (errorQuery) {
    console.log(errorQuery);
    return null;
  }

  const hapusPengunjung = (id) => {
    hapusDataPengunjung({
      variables: {
          id: id
      }
  });
  };

  const tambahPengunjung = (newData) => {
    insertDataPengunjung({
      variables: {
        object: {
          id: uuidv4(),
          nama: newData.nama,
          umur: newData.umur,
          jenis_kelamin: newData.jenisKelamin,
        }
      }
    });
  };

  const editPengunjung = (newData) => {
    updateDataPengunjung({
      variables: {
        object: {
          id: newData.id,
          nama: newData.nama,
          umur: newData.umur,
          jenis_kelamin: newData.jenisKelamin,
        }
      }
    });
    // setDataUpdate(newData);
    
  }

  const handleButtonEdit = (id) => {
    setIsUpdate(true);
    const newData = dataQuery?.find((item) => item.id === id)
    ;
    console.log(newData)
    // setDataUpdate(newData);
  }

  return (
    <div>
      <Header />
      {/* <ListPassenger
        data={dataQuery?.pengunjung}
        key={dataQuery?.pengunjung.id}
        hapusPengunjungByHome={hapusPengunjung}
        editPengunjungByHome={editPengunjung}
      /> */}
      <PassengerInput tambahPengunjung={tambahPengunjung} dataByHome={dataQuery}
        key={dataQuery?.pengunjung.id}
        hapusPengunjungByHome={hapusPengunjung}
        editPengunjungByHome={editPengunjung}
        handleButtonEditByHome={handleButtonEdit} />
    </div>
  );
}

export default Home;
