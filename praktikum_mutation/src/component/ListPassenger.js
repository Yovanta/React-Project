import ListItem from "./ListItem"

const ListPassenger = (props) => {
    const {dataByInput, hapusPengunjungByInput, editPengunjungByInput, handleBukaInputByInput, editModeByInput} = props
    console.log(dataByInput);
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
            <thead bgcolor="red">
                <tr>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </tr>
            </thead>
                <tbody>
                    {dataByInput?.map((passenger) => <ListItem key={passenger.id} item={passenger} hapusPengunjungByList={hapusPengunjungByInput} editPengunjungByList={editPengunjungByInput} handleBukaInputByInput={handleBukaInputByInput} editModeByInput={editModeByInput}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger