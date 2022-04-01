import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import NotFoundIcon from '../assets/NotFound.icon'

function PageNotFound() {
  return (
    <div className='bg-black not-found relative'>
        <div className='flex justify-center'>
          <NotFoundIcon/>
        </div>
        <Button type='button'>
          <Link to="/">RETURN TO HOME</Link> 
        </Button>
    </div>
  )
}
const Button = styled.button`
  margin-top: 10px;
  background-color: #4B5274;
  color: #FFFFFF;
  padding: 10px 30px;
  border-radius: 25px;
  cursor: pointer;
  margin-bottom: 61px;
`

export default PageNotFound