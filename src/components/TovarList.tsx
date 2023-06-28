import React, { FC } from 'react'
import { ITovar } from '../interface/tovar.interface'
import { TovarItem } from './TovarItem'

interface ITovarA{
    tovars: ITovar[]
    page: number
}

export const TovarList: FC<ITovarA> = ({tovars, page}) => {
  return (
    <div className='itemsGrid'>
        {tovars.slice(page * 6, page * 6 + 6).map((tovar) => 
            <TovarItem tovar={tovar} key={tovar.id}></TovarItem>
        )}
    </div>
  )
}
