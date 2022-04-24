import './Home.css'
const ListItem = ({item, hapusPengunjungByList}) => {
    return(
        <tr>
            <td>{item.nama}</td>
            <td>{item.umur}</td>
            <td>{item.jenis_kelamin}</td>
            <td className="removeBorder">
                <button onClick={() => hapusPengunjungByList(item?.id)}>Hapus</button>
            </td>
            <td className="removeBorder">
                <button>Edit</button>
            </td>
        </tr>
    )
}
export default ListItem