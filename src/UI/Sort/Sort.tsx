import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { IOptions } from "../../interface";

const Sort: React.FC<IOptions> = ({ options, select, setSelect }) => {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sl">Сортировкап</InputLabel>
        <Select
          id="sl"
          data-testid="selectForm"
          name="mySelect"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
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
