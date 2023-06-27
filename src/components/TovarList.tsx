import React, { FC } from 'react'
import { ITovar, ITovarA } from '../interface/tovar.interface'
import { TovarItem } from './TovarItem'

interface ITovarA{
    tovars: ITovar[]
}

export const TovarList: FC<ITovarA> = ({tovars}) => {
  return (
    <div className='itemsGrid'>
        {tovars.map((tovar) => 
            <TovarItem tovar={tovar} key={tovar.id}></TovarItem>
        )}
    </div>
  )
}
