import ListItem from "./ListItem"

const ListPassenger = (props) => {
    const {data, hapusPengunjungByHome} = props
    console.log(data);
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
                    {data?.map((passenger) => <ListItem key={passenger.id} item={passenger} hapusPengunjungByList={hapusPengunjungByHome}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger