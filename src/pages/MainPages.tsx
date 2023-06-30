import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { TovarItem } from '../components/TovarItem';
import { TovarList } from '../components/TovarList';
import Pagination from '@mui/material/Pagination';
import { Box, Button, Container, Snackbar } from '@mui/material';
import { PaginationC } from '../UI/PaginationC/PaginationC';
import { ITovar } from '../interface/tovar.interface';
import { useSearchParams } from 'react-router-dom';

export const MainPages = () => {

  const [allTovars, setallTovars] = useState<ITovar[]>([]);
  const [page, setPage] = useState<number>(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const numberTovarsInPage = 6;

  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setallTovars(res.data))
  })

  const tovars = useMemo(() => {
    if(searchParams.get('karp')){
      return allTovars.filter(items => items.title.includes(searchParams.get('karp') || ''))
    }
    return allTovars;
  },[allTovars, searchParams])

  return (
    <>
      <TovarList tovars={tovars} page={page} ntip={numberTovarsInPage}></TovarList>
      <PaginationC tovars={tovars} page={page} setPage={setPage} ntip={numberTovarsInPage}></PaginationC>
      
    </>
  )
}
 