// import { useState } from 'react'
// import {v4 as uuidv4} from 'uuid'
import ListTodo from '../Component/ListTodo'
import TodoInput from '../Component/TodoInput'

// const initialValue = [
//     {
//         id: uuidv4(),
//         title: "React Fundamental",
//         desc: "Mengerjakan Exercise",
//         date: "20/03/2022",
//         completed: true,
//     },
//     {
//         id: uuidv4(),
//         title: "React Fundamental",
//         desc: "Mengerjakan Assignment",
//         date: "21/03/2022",
//         completed: false,
//     }
// ]
function Home() {
    // const [data, setData] = useState(initialValue)

    // const hapusTodo = id => {
    //     const newListTodo = data.filter((item) =>item.id !== id)
    //     setData(newListTodo) 
    // }

    // const tambahTodo = (newTodo) => {
    //    const newData = {
    //        id: uuidv4(),
    //        ...newTodo
    //    };
    //    console.log(newTodo)
    //    setData((data) => [...data, newData])
    // }

    // const handleCheckboxChange=(id)=>{
    //     const editedTodo = data.map((todo) => {
    //         if (todo.id === id) {
    //           return {
    //             ...todo,
    //             completed: !todo.completed,
    //           };
    //         }
    //         return todo
    //       });
      
    //       console.log(editedTodo)
    //       setData(editedTodo);
    // }

    return (
        <div className='inline-block flex-grow home'>
            <TodoInput/>
            <ListTodo/>
        </div>
    )
}

export default Home
