import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { IOptions } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  changeСategory,
  filterSortSelector,
} from "../../store/FilterSortSlice";

const Sort: React.FC<IOptions> = ({ options }) => {
  const dispatch = useAppDispatch();
  const { categor } = useAppSelector(filterSortSelector);
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sl">Сортировка</InputLabel>
        <Select
          id="sl"
          data-testid="selectForm"
          name="mySelect"
          value={categor}
          onChange={(e) => dispatch(changeСategory(e.target.value))}
          style={{ marginBottom: "20px" }}
        >
          <MenuItem value="id">По умолчанию</MenuItem>
          {options.map(({ value, name }, index) => (
            <MenuItem key={index} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Sort;
