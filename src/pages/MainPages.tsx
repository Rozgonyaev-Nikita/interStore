import axios from 'axios'
import  { useMemo, useState } from 'react'
import { TovarList } from '../components/TovarList';
import { PaginationC } from '../UI/PaginationC/PaginationC';
import { ITovar } from '../interface/tovar.interface';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Skeleton from '../UI/Skeleton/Skeleton';


export const MainPages = () => {

  const [page, setPage] = useState<number>(0);

  const [searchParams] = useSearchParams();

  const numberTovarsInPage = 6;

  const tovarsFetching = async() => {
   const {data} = await axios.get<ITovar[]>('https://fakestoreapi.com/products');
    return data;
  }
  const {data: allTovars = [] as ITovar[], isLoading, isError} = useQuery('tovars', tovarsFetching, {refetchOnWindowFocus: false});

  const tovars = useMemo(() => {
    if(searchParams.get('karp')){
      return allTovars.filter(items => items.title.toLowerCase().includes(searchParams.get('karp') || ''))
    }
    searchParams.delete('karp');
    return allTovars;
  },[allTovars, searchParams])

  if(isLoading){
     return <Skeleton></Skeleton>
  }

  if(isError){
    return <h1>Ошибка нахой!</h1>
  }

  return (
    <>
      {allTovars && <><TovarList tovars={tovars} page={page} ntip={numberTovarsInPage}></TovarList>
      <PaginationC tovars={tovars} page={page} setPage={setPage} ntip={numberTovarsInPage}></PaginationC></>}
      
    </>
  )
}
 