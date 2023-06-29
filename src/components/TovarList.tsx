import React, { FC, useEffect, useMemo } from 'react'
import { ITovar } from '../interface/tovar.interface'
import { TovarItem } from './TovarItem'
import { useSearchParams } from 'react-router-dom'

interface ITovarA{
    tovars: ITovar[];
    page: number;
    ntip: number; // numberTovarsInPage
}

export const TovarList: FC<ITovarA> = ({tovars, page, ntip}) => {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='itemsGrid'>
        {tovars.slice(page * ntip, page * ntip + ntip).map((tovar) => 
            <TovarItem tovar={tovar} key={tovar.id}></TovarItem>
        )}
    </div>
  )
}
