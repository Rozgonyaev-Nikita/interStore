import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TovarItem } from '../components/TovarItem';
import { TovarList } from '../components/TovarList';

export const MainPages = () => {

  const [tovars, setTovars] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setTovars(res.data))
  })

  return (
    <>
      <TovarList tovars={tovars}></TovarList>
    </>
  )
}
