import { ChangeEvent } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchStyles";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

export const SearchInp = () => {
  const [, setSearchParams] = useSearchParams();

  const searchDeboubce = debounce(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log("karo");
      setSearchParams({ karp: e.target.value.toLowerCase() });
    },
    400
  );

  return (
    <>
      <Search className="mySearch">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => searchDeboubce(e)}
        />
      </Search>
    </>
  );
};
