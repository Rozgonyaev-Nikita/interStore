import React from "react";
import { Sort, Categories } from "../../UI";
import PriceSlider from "../../UI/Categories/PriceSlider";

interface IFilterAndSort {
  currentTovars: number;
}

const FilterAndSort: React.FC<IFilterAndSort> = ({
  currentTovars,
}): JSX.Element => {
  return (
    <div>
      <Categories />
      <PriceSlider currentTovars={currentTovars} />
      <Sort
        options={[
          { value: "title", name: "По заголовку" },
          { value: "price", name: "По цене" },
          { value: "category", name: "По категории" },
        ]}
      />
    </div>
  );
};

export default FilterAndSort;
