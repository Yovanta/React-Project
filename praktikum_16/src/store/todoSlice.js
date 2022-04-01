import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const initialValue = [
    {
        id: uuidv4(),
        title: "React Fundamental",
        desc: "Mengerjakan Exercise",
        date: "20/03/2022",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "React Fundamental",
        desc: "Mengerjakan Assignment",
        date: "21/03/2022",
        completed: false,
    }
]

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue
    },
    reducers: {
        hapusTodo : (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        tambahTodo: (state, action) => {
            const newData = {
                id: uuidv4(),
                ...action.payload,
            };
            state.todos = [...state.todos, newData];
        },
        handleCheckboxChange : (state, action ) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  };
                }
                return todo
              });
              state.todos = [...state.todos]
        }
    }
})

export const {tambahTodo, hapusTodo, handleCheckboxChange} = todoSlice.actions;
export default todoSlice.reducer;