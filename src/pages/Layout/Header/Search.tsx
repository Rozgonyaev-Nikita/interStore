import { ChangeEvent } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchStyles";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

interface ISearch extends URLSearchParams {
  karp?: string;
}

export const SearchInp = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchDeboubce = debounce(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value.toLowerCase();
      setSearchParams((prevSearchParams) => {
        const newSearchParams: ISearch = { ...prevSearchParams, karp: value };
        if (value !== "") {
          console.log("что то есть", newSearchParams);
        } else {
          delete newSearchParams.karp;

          // searchParams.delete("karp");
          console.log("spr", newSearchParams);
        }
        return newSearchParams;
      });
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
