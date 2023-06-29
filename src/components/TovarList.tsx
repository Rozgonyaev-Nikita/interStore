import React, { FC, useEffect } from 'react'
import { ITovar } from '../interface/tovar.interface'
import { TovarItem } from './TovarItem'
import { useSearchParams } from 'react-router-dom'

interface ITovarA{
    tovars: ITovar[];
    page: number;
    numberTovarsInPage: number;
}

export const TovarList: FC<ITovarA> = ({tovars, page, numberTovarsInPage}) => {

  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(() => {
    console.log(searchParams.get('karp'));
  }, [searchParams]);

  return (
    <div className='itemsGrid'>
        {tovars.filter(items => items.title.includes(searchParams.get('karp') || '')).slice(page * numberTovarsInPage, page * numberTovarsInPage + numberTovarsInPage).map((tovar) => 
            <TovarItem tovar={tovar} key={tovar.id}></TovarItem>
        )}
    </div>
  )
}
