import { useMemo } from "react";
import { ISort, IType } from "../interface/other.interface";
import { ITovar } from "../interface/tovar.interface";

// export const sortFilterTovars = (
//   allTovars: ITovar[],
//   searchParams: URLSearchParams,
//   filterSort: ISort
// ): { priceSort: ITovar[]; maxPrice: number } => {
//   const { categor, filterCategory, sliderPrice } = filterSort;
//   const stage1 = findFilter(allTovars, searchParams);
//   const tovar = filterCategori(filterCategory, stage1);
//   const categorSelect = categorySelect(tovar, categor);
//   const priceSort = sortPrice(categorSelect, sliderPrice);

//   const maxPrice = Math.max(...categorSelect.map((item) => item.price));

//   return { priceSort, maxPrice };
// };

export const useSortFilterTovars = (
  allTovars: ITovar[],
  searchParams: URLSearchParams,
  filterSort: ISort
) => {
  const filterSortTovars = useMemo((): {
    priceSort: ITovar[];
    maxPrice: number;
  } => {
    const { categor, filterCategory, sliderPrice } = filterSort;
    const stage1 = findFilter(allTovars, searchParams);
    const tovar = filterCategori(filterCategory, stage1);
    const categorSelect = categorySelect(tovar, categor);
    const priceSort = sortPrice(categorSelect, sliderPrice);

    const maxPrice = Math.max(...categorSelect.map((item) => item.price));

    return { priceSort, maxPrice };
  }, [filterSort, allTovars, searchParams]);
  return filterSortTovars;
};
// useMemo((allTovars: ITovar[], searchParams: URLSearchParams, filterSort: ISort)
//  : { priceSort: ITovar[]; maxPrice: number } => {
//   const { categor, filterCategory, sliderPrice } = filterSort;
//   const stage1 = findFilter(allTovars, searchParams);
//   const tovar = filterCategori(filterCategory, stage1);
//   const categorSelect = categorySelect(tovar, categor);
//   const priceSort = sortPrice(categorSelect, sliderPrice);

//   const maxPrice = Math.max(...categorSelect.map((item) => item.price));

//   return { priceSort, maxPrice };
// }, [])

const findFilter = (allTovars: ITovar[], searchParams: URLSearchParams) => {
  let karp;
  if (searchParams) {
    karp = [...allTovars].filter((items) =>
      items.title.toLowerCase().includes(searchParams.get("karp") || "")
    );
  } else {
    // searchParams.delete("karp");
    karp = allTovars;
  }
  return karp;
};

const filterCategori = (
  filterCategor: string[],
  tovars: ITovar[]
): ITovar[] => {
  const filterTovars = tovars;
  let arr: ITovar[] = [];
  if (filterCategor.length) {
    for (let i = 0; i < filterCategor.length; i++) {
      arr = arr.concat(
        filterTovars.filter((item) => item.category === filterCategor[i])
      );
    }

    return arr;
    // return filterTovars.filter((item) => item.category === filterCategor);
  }
  return filterTovars;
};

const categorySelect = (tovar: ITovar[], categor: string) => {
  if (categor !== "id" && categor !== "price") {
    return [...tovar].sort((a, b) =>
      String(a[categor as keyof IType]).localeCompare(
        String(b[categor as keyof IType])
      )
    );
  } else {
    return [...tovar].sort((a, b) => a[categor] - b[categor]);
  }
};

const sortPrice = (currentTovars: ITovar[], sliderPrice: number | number[]) => {
  if (typeof sliderPrice !== "number") {
    const finalTovars = currentTovars.filter(
      (item) => item.price >= sliderPrice[0] && item.price <= sliderPrice[1]
    );
    return finalTovars;
  } else {
    return currentTovars;
  }
};
