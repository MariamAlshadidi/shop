import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import '../index.css'
const SearchBox = () => {
    const navigate = useNavigate();
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
        navigate(`/search/${keyword}`)
    } else {
        navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline  className='box-search'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 '
      ></Form.Control>
      <Button type='submit' className='p-2 btn-search'>
        <i class="fas fa-search"></i>
      </Button>
    </Form>
  )
}

export default SearchBox