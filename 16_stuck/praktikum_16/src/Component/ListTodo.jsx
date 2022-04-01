import {useSelector, useDispatch} from 'react-redux'
import { hapusTodo, handleCheckboxChange } from '../store/todoSlice'

import ItemTodo from './ItemTodo'


const ListTodo = (props) => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos?.map((todo) => <ItemTodo key={todo.id} item = {todo} hapusTodo={() => {dispatch(hapusTodo(todo.id))}} onChange={dispatch(handleCheckboxChange(todo.id))}/>)}
    </div> 
  )
}

export default ListTodo