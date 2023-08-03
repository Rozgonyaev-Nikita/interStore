import { IType } from "../interface/other.interface";
import { ITovar } from "../interface/tovar.interface";

export const sortFilterTovars = (
  categor: string | number,
  allTovars: ITovar[],
  searchParams: URLSearchParams
): ITovar[] => {
  if (categor !== "id" && categor !== "price") {
    if (searchParams) {
      return [...allTovars]
        .filter((items) =>
          items.title.toLowerCase().includes(searchParams.get("karp") || "")
        )
        .sort((a, b) =>
          String(a[categor as keyof IType]).localeCompare(
            String(b[categor as keyof IType])
          )
        );
    } else {
      // searchParams.delete("karp");

      return [...allTovars].sort((a, b) =>
        String(a[categor as keyof IType]).localeCompare(
          String(b[categor as keyof IType])
        )
      );
    }
  } else {
    if (searchParams.get("karp")) {
      return [...allTovars]
        .filter((items) =>
          items.title.toLowerCase().includes(searchParams.get("karp") || "")
        )
        .sort((a, b) => a[categor] - b[categor]);
    } else {
      searchParams.delete("karp");

      return [...allTovars].sort((a, b) => a[categor] - b[categor]);
    }
  }
};
