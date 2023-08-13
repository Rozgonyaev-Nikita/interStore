import React, { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { changeSliderPrice } from "../../store/FilterSortSlice";
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
  const [sliderValue, setSliderValue] = useState([0, maxCurrentPrice]);
  const step = Math.floor(Math.ceil(maxCurrentPrice / 200));

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

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setSliderValue([0, value]);
    } else {
      setSliderValue(value);
    }
    changeRedux(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeRedux = useCallback(
    debounce((value: number | number[]) => {
      dispatch(changeSliderPrice(value));
    }, 250),
    []
  );

  useEffect(() => {
    setSliderValue([0, maxCurrentPrice]);
    dispatch(changeSliderPrice([0, maxCurrentPrice]));
  }, [maxCurrentPrice, dispatch]);
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-inverted-range-slider" gutterBottom>
        Цена: ${<span style={{ color: "red" }}>{sliderValue[0]}</span>} до $
        {<span style={{ color: "red" }}>{sliderValue[1]}</span>}
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
