import { ShoppingBasket } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { BasketSide } from '../../../components/BasketSide/BasketSide';
import {Search, SearchIconWrapper, StyledInputBase} from './SearchStyles';
import { useAppSelector } from '../../../hooks/reduxHooks'

export const Header = () => {

  const [isOpenBasket, setOpenBasket] = useState(false);

  const countAllTovars = useAppSelector(state => state.tovarsBasket.countAll)

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Типо сайт
            </Typography>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenBasket(true)}
              color="inherit"
            >
              {/* <Badge badgeContent={countO} color="secondary"> */}
              <Badge badgeContent={countAllTovars} color="secondary">
                <ShoppingBasket color="action" />
              </Badge>

            </IconButton>
          </Toolbar>
        </AppBar>
        <BasketSide open={isOpenBasket} onClose={() => setOpenBasket(false)}></BasketSide>
      </Box>
      </>
  )
}
