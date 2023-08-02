import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { IOptions } from "../../interface";

const Sort: React.FC<IOptions> = ({ options, select, setSelect }) => {
  return (
    <>
      <InputLabel id="sl">Сортировка</InputLabel>
      <Select
        id="sl"
        data-testid="selectForm"
        name="mySelect"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <MenuItem value="default">По умолчанию</MenuItem>
        {options.map(({ value, name }, index) => (
          <MenuItem key={index} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Sort;
