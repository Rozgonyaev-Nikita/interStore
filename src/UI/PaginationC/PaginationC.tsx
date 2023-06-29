import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import React from 'react'
import { ITovar } from '../../interface/tovar.interface'

interface IPagination{
  page: number,
  setPage: (page: number) => void,
  tovars: ITovar[],
  ntip: number // numberTovarsInPage
}

export const PaginationC: React.FC<IPagination> = ({page, setPage, tovars, ntip}) => {

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
    console.log(value);
  };


  return (
    <Container sx={{display:'flex', justifyContent:'center'}}>
        <Pagination count={Math.ceil(tovars.length/ntip)} page={page} onChange={handleChange} />
      </Container>
  )
}

