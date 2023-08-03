import React from "react";
import { Sort } from "../../UI";

interface IFilterAndSort {
  categor: string;
  setCategory: (value: string) => void;
}

const FilterAndSort: React.FC<IFilterAndSort> = ({
  categor,
  setCategory,
}): JSX.Element => {
  return (
    <div>
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
