import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TovarItem } from '../components/TovarItem';
import { TovarList } from '../components/TovarList';
import Pagination from '@mui/material/Pagination';
import { Box, Container } from '@mui/material';
import { PaginationC } from '../UI/PaginationC/PaginationC';

export const MainPages = () => {

  const [tovars, setTovars] = useState([]);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setTovars(res.data))
  })

  return (
    <>
      <TovarList tovars={tovars} page={page}></TovarList>
      <PaginationC tovars={tovars} page={page} setPage={setPage}></PaginationC>
    </>
  )
}
 