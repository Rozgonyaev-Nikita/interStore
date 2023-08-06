import { IType } from "../interface/other.interface";
import { ITovar } from "../interface/tovar.interface";

export const sortFilterTovars = (
  categor: string | number,
  allTovars: ITovar[],
  searchParams: URLSearchParams
): ITovar[] => {
  const tovar = findFilter(allTovars, searchParams);
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
