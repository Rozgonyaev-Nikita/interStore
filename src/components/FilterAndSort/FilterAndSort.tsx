import React from "react";
import { Sort, Categories } from "../../UI";
import PriceSlider from "../../UI/Categories/PriceSlider";

interface IFilterAndSort {
  categor: string;
  setCategory: (value: string) => void;
  filterCategory: string[];
  setFilterCategory: (category: string[]) => void;
  currentTovars: number;
}

const FilterAndSort: React.FC<IFilterAndSort> = ({
  categor,
  setCategory,
  filterCategory,
  setFilterCategory,
  currentTovars,
}): JSX.Element => {
  return (
    <div>
      <Categories
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <PriceSlider currentTovars={currentTovars} />
      <Sort
        options={[
          { value: "title", name: "По заголовку" },
          { value: "price", name: "По цене" },
          { value: "category", name: "По категории" },
        ]}
        select={categor}
        setSelect={setCategory}
      />
    </div>
  );
};

export default FilterAndSort;
