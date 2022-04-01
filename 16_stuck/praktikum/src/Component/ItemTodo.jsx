import React from 'react'
import styled from '@emotion/styled'

const ItemTodo = ({item, hapusTodo, onChange}) => {

  
  const WrapperTodoItem = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    width: 80%;
    border-radius: 25px;
    padding: 10px 15px;
    margin: 20px 10%;
    align-items: center;
    box-shadow: 3px 3px #282c40;
    column-gap: 80px;
    margin-left: 150px;


    @media (max-width: 800px) {
      column-gap: 50px;
    }

    @media (max-width: 428px) {
      display: block;
      padding: 10px 5px;
      margin-left: 40px;
    }
  `
  const Button = styled.div`
    background-color: #4B5274;
    color: #FFFFFF;
    padding: 10px 30px;
    border-radius: 25px;
    cursor: pointer;
  `

  return (
      <WrapperTodoItem>
        <input type={"checkbox"} name={"checkbox"}  checked={item.completed} onChange={() => onChange(item.id)}/>

        <div style={item.completed ? {textDecoration:"line-through", color:"#808080"} : null}>
          <h3 className='font-semibold text-xl'>{item.title}</h3>
          <p>{item.desc}</p>
        </div>

        <p>{item.date}</p>
        <Button onClick={() => {hapusTodo(item.id)}}>Delete</Button>
      </WrapperTodoItem>
  )
}

export default ItemTodo