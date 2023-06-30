import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React, { FC, useState } from 'react'
import { ITovar } from '../interface/tovar.interface'
import IconButton from '@mui/material/IconButton'
import { ShoppingBagOutlined } from '@mui/icons-material'
import { useAppDispatch } from '../hooks/reduxHooks'
import { AddTovarInBasket } from '../store/ListProductsBasketSlice'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


interface ITovarItem {
  tovar: ITovar
}

export const TovarItem: FC<ITovarItem> = ({ tovar }) => {


  const [open, setOpen] = useState(false)

  const dispatch = useAppDispatch();

  const AddTovarBasket = (tovar: ITovar): void => {
    setOpen(true);
    dispatch(AddTovarInBasket(tovar))
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, maxWidth: 345, backgroundSize: 'contain', backgroundPosition: 'center' }}
        image={tovar.image}
        title={tovar.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ height: 60, overflow: 'hidden' }}>
          {tovar.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 100, overflow: 'hidden' }}>
          {tovar.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sharekl</Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => AddTovarBasket(tovar)}
        >
          <ShoppingBagOutlined />
        </IconButton>
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      ><Alert severity="success">Товар добавлен в корзину!</Alert></Snackbar>
    </Card>
  )
}

