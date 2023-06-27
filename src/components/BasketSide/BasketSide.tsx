import React, {useState, useEffect, useRef} from 'react'
// import classes from './BasketPanel.module.scss'
import { IPost } from '../../interface/IPosts'
import { useSelector } from 'react-redux';
// import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer} from '@mui/material';
import InboxIcon, { DeleteOutlineOutlined, ShoppingBasket } from '@mui/icons-material';
import MailIcon from '@mui/icons-material';
import {open, setOpenBasket} from '../../pages/Layout/Header/Header'

interface IDrawer{
    open: boolean,
    setOpenBasket: () => void
}

export const BasketSide = ({open, onClose}):JSX.Element => {

const [baskt, setBasket] = useState<IPost[]>([]);
// const basket = useAppSelector(state => state.basket.basket);
const divRef = useRef<HTMLDivElement>(null);
const DrawerRef = useRef<React.RefObject<HTMLDivElement> | null | undefined>();

// const openBasket = useAppSelector(state => state.openBasket);

// const dispatch = useAppDispatch();

// useEffect(() => {
//   document.body.addEventListener('click',(e: unknown): void => {
//     if(!e.composedPath().includes(divRef.current) & e.composedPath().includes(DrawerRef.current)){
//         dispatch(OpenBasket(false));
//       console.log(e.composedPath().includes(divRef.current));
//     }
//   },[])

// }, [])

  return (
    <Drawer 
      ref={DrawerRef}
      anchor='right'
    //   open={openBasket}
    open={open}
       onClose={onClose}
      >
      <List ref={divRef} sx={{width: '400px', height:'100%'}} >
     <ListItem alignItems='center'>
      <ListItemIcon>
        <ShoppingBasket 
        // onClick={() => dispatch(OpenBasket(false))}
        />
      </ListItemIcon>
      <ListItemText primary='Корзина'/>
    </ListItem>
    <Divider/>
    {/* {basket.length!== 0 ? basket.map((bask) => 
        <ListItem key={bask.id}
        //  className={classes.elem}
          sx={{width:'auto', justifyContent: 'space-between'}}>
            <h2 className='post--title'>{bask.title}</h2>
            <p>{bask.count}</p>
            <DeleteOutlineOutlined 
            // onClick={() => dispatch(DeleteProduct(bask.id))}
            //  className={classes.deleteIcon}
             />
           </ListItem> 
        ): <h1 style={{color:'red', fontSize:'36px'}}>Корзина пуста</h1>} */}
</List>

    </Drawer>
  )
}
