import { IType } from "../interface/other.interface";
import { ITovar } from "../interface/tovar.interface";

export const sortFilterTovars = (
  categor: string | number,
  allTovars: ITovar[],
  searchParams: URLSearchParams,
  filterCategor: string[]
): ITovar[] => {
  const tovar1 = findFilter(allTovars, searchParams);
  const tovar = filterCategory(filterCategor, tovar1);
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

const filterCategory = (
  filterCategor: string[],
  tovars: ITovar[]
): ITovar[] => {
  const filterTovars = tovars;
  let arr: ITovar[] = [];
  if (filterCategor.length) {
    console.log("dh", filterCategor);
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
