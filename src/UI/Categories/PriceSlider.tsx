import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { maxPriceSelector } from "../../store/FetchTovars";
import {
  changeSliderPrice,
  filterSortSelector,
  sliderPriceSelector,
} from "../../store/FilterSortSlice";
import debounce from "lodash.debounce";

function valuetext(value: number) {
  return `${value} $`;
}

interface IPriceSlider {
  maxCurrentPric: number;
}

const PriceSlider: React.FC<IPriceSlider> = ({ maxCurrentPric }) => {
  const maxCurrentPrice: number =
    maxCurrentPric !== null ? maxCurrentPric : 100;
  console.log("maxCurrentPrice", maxCurrentPrice);
  const [sliderValue, setSliderValue] = useState([0, maxCurrentPrice]);
  // const [sliderValue, setSliderValue] = useState([0, maxCurrentPrice]);
  const step = Math.floor(Math.ceil(maxCurrentPrice / 200));
  // console.log("step", step);
  console.log("maxCurrentPrice", maxCurrentPrice);
  // const sliderValueh = useAppSelector(sliderPriceSelector);

  const dispatch = useAppDispatch();
  const marks = [
    {
      value: 0,
      label: "0 $",
    },
    {
      value: maxCurrentPrice,
      label: `${maxCurrentPrice} $`,
    },
  ];

  const defaultValue: [number, number] = [
    Math.floor(0),
    Math.floor(maxCurrentPrice),
  ];

  const handleSliderChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setSliderValue([0, value]);
    } else {
      setSliderValue(value);
    }
    changeRedux(value);
  };
  const changeRedux = React.useCallback(
    debounce((value) => {
      dispatch(changeSliderPrice(value));
    }, 250),
    []
  );

  // console.log("sliderValue", sliderValue);
  React.useEffect(() => {
    setSliderValue([0, maxCurrentPrice]);
    dispatch(changeSliderPrice([0, maxCurrentPrice]));
  }, [maxCurrentPrice]);
  return (
    <Box sx={{ width: 250 }}>
      <h1>
        {sliderValue[0]} {sliderValue[1]}
      </h1>
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={defaultValue}
        value={sliderValue}
        max={maxCurrentPrice}
        step={step}
        onChange={handleSliderChange}
        marks={marks}
      />
    </Box>
  );
};
export default PriceSlider;
