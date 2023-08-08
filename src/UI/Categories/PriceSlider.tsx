import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { maxPriceSelector } from "../../store/FetchTovars";

function valuetext(value: number) {
  return `${value} $`;
}

interface IPriceSlider {
  currentTovars: number;
}
const PriceSlider: React.FC<IPriceSlider> = ({ currentTovars }) => {
  const [sliderValue, setSliderValue] = useState([20, 37]);

  const maxPrice = useAppSelector(maxPriceSelector);
  console.log("maxPrice", maxPrice);
  const marks = [
    {
      value: 0,
      label: "0 $",
    },
    {
      value: 100,
      label: `${currentTovars} $`,
    },
  ];

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setSliderValue([0, value]);
    } else {
      setSliderValue(value);
    }
  };
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
        defaultValue={[20, 37]}
        value={sliderValue}
        // onChange={(e) =>
        //   e.target !== null ? setSliderValue(e.target.value) : setSliderValue([0, 50])
        // }
        onChange={handleSliderChange}
        marks={marks}
      />
    </Box>
  );
};
export default PriceSlider;
