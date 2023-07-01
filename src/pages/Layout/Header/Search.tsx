import React from 'react'
import {Search, SearchIconWrapper, StyledInputBase} from './SearchStyles';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';

export const SearchInp = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearchParams({karp: (e.target.value).toLowerCase()})}
            />
        </Search>
        </>
        
    )
}
