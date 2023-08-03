import { useMemo } from "react";
import { IType } from "../interface/other.interface";
import { ITovar } from "../interface/tovar.interface";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

export const sortFilterTovars = (
  categor: string | number,
  allTovars: ITovar[],
  searchParams: {
    get(arg0: string): string;
    delete(arg0: string): string;
    queryParams: URLSearchParams;
    updateQueryParams: (newParams: URLSearchParamsInit) => void;
  }
): ITovar[] => {
  if (categor !== "id") {
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
        .sort((a, b) => a.id - b.id);
    } else {
      searchParams.delete("karp");

      return [...allTovars].sort((a, b) => a.id - b.id);
    }
  }
};
