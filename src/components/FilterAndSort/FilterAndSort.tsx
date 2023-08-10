import React from "react";
import { Sort, Categories } from "../../UI";
import PriceSlider from "../../UI/Categories/PriceSlider";

interface IFilterAndSort {
  maxCurrentPrice: number;
}

const FilterAndSort: React.FC<IFilterAndSort> = ({
  maxCurrentPrice,
}): JSX.Element => {
  return (
    <div>
      <Categories />
      <PriceSlider maxCurrentPric={maxCurrentPrice} />
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
