import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { TovarItem } from '../components/TovarItem';
import { TovarList } from '../components/TovarList';
import Pagination from '@mui/material/Pagination';
import { Box, Container } from '@mui/material';
import { PaginationC } from '../UI/PaginationC/PaginationC';
import { ITovar } from '../interface/tovar.interface';
import { useSearchParams } from 'react-router-dom';

export const MainPages = () => {

  const [tovars, setTovars] = useState<ITovar[]>([]);
  const [page, setPage] = useState<number>(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const numberTovarsInPage = 6;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setTovars(res.data))
  })

  const mTovars = useMemo(() => {
    return tovars.filter(items => items.title.includes(searchParams.get('karp') || ''))
  },[])

  return (
    <>
      <TovarList tovars={tovars} page={page} numberTovarsInPage={numberTovarsInPage}></TovarList>
      <PaginationC tovars={tovars} page={page} setPage={setPage} numberTovarsInPage={numberTovarsInPage}></PaginationC>
    </>
  )
}
 