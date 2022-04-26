import {useState} from 'react'
import './Home.css';
import ListPassenger from './ListPassenger';

function PassengerInput(props) {
    const {tambahPengunjung, dataByHome, key, hapusPengunjungByHome, editPengunjungByHome, handleButtonEditByHome} = props
    console.log(dataByHome)
    const [data, setData] = useState({
        nama : "",
        umur : "",
        jenisKelamin: "Pria"     
    })

    const [editing, setEditing] = useState(true)

    const onChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        console.log(data)
    }

    // const handleUpdate = (data) => {
    //     console.log(data);
    //     props.isUpdate = true
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.nama && data.umur && data.jenisKelamin){
            const umur = data.umur
            if(umur >= 75 || umur <= 12) {
                alert("umur tidak sesuai")
            } else {
                const newData = {
                    nama: data.nama,
                    umur: data.umur,
                    jenisKelamin: data.jenisKelamin,
                }
                if(handleButtonEditByHome) {
                    editPengunjungByHome(newData);
                } else {
                    tambahPengunjung(newData);
                }

                setData({
                    nama: "",
                    umur : "",
                    jenisKelamin: "Pria"
                })
            }
        } else {
            alert("data masih ada yang kosong")
        }
    }

    const handleBukaInput = () => {
        setEditing(false)
    }

    const handleTutupInput = () => {
        setEditing(true)
    }
    
    let viewMode = {};
    let editMode = {};

    if(editing) {
        viewMode.display = 'none';
    } else{
        editMode.display='none';
    }

    return(
        <div>
            <ListPassenger
                dataByInput={dataByHome?.pengunjung}
                // key={key.id}
                hapusPengunjungByInput={hapusPengunjungByHome}
                editPengunjungByInput={editPengunjungByHome} handleBukaInputByInput={handleBukaInput} editModeByInput={editMode}
            />
            <div onSubmit={() => {}} style={viewMode}>
                <p>Masukkan Nama Anda</p>
                <input type="text" placeholder="nama anda..." value={data.nama} name="nama" onChange={onChange}/>

                <p>Masukkan Umur Anda</p>
                <input type="text" placeholder="umur anda..." value={data.umur} name="umur" onChange={onChange}/>

                <p>Masukkan Jenis Kelamin Anda</p>
                <select onChange={onChange} name="jenisKelamin">
                    <option value="Pria" selected>
                        Pria
                    </option>
                    <option value="Wanita">Wanita</option>
                </select>
                <p></p>
                <button onClick={handleSubmit} >Submit</button>
                <button onClick={handleTutupInput}  style={{ marginLeft: "10px" }}>Selesai</button>
            </div>
            <button className='btn-input' onClick={handleBukaInput} style={editMode} >Masukan Nama Penumpang</button>
        </div>
    )
}
export default PassengerInput