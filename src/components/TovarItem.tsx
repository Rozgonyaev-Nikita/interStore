import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { ITovar } from '../interface/tovar.interface'

interface ITovarItem{
    tovar: ITovar
}

export const TovarItem: FC<ITovarItem> = ({tovar}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, maxWidth:345, backgroundSize: 'contain', backgroundPosition: 'center' }}
        image={tovar.image}
        title={tovar.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{height: 60, overflow: 'hidden'}}>
          {tovar.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height:100, overflow: 'hidden'}}>
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
          {tovar.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sharekl</Button>
        <Button size="small">Learn Moref</Button>
      </CardActions>
    </Card>
  )
}
