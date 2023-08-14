import { useEffect, useMemo, useState } from "react";
import { FilterAndSort, TovarList } from "../components";
import { Skeleton } from "../UI";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarsSelector, tovarsThunk } from "../store/FetchTovars";
// import { sortFilterTovars } from "../utils/sortAndFilter"; 1232141245
import { ITovar } from "../interface/tovar.interface";
import { useSearchParams } from "react-router-dom";
import { filterSortSelector } from "../store/FilterSortSlice";
import { ISort } from "../interface/other.interface";
import { useSortFilterTovars } from "../utils/sortAndFilter";

export const MainPages = () => {
  const [page] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { tovars: allTovars, status } = useAppSelector(tovarsSelector);
  const filterSort: ISort = useAppSelector(filterSortSelector);

  const numberTovarsInPage = 8;

  const removeParams = () => {
    searchParams.delete("karp");

    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (allTovars.length == 0) {
      dispatch(tovarsThunk());
    }
  }, [allTovars.length, dispatch, filterSort]);

  const { priceSort: tovars, maxPrice } = useSortFilterTovars(
    allTovars,
    searchParams,
    filterSort
  );
  console.log("main render");

  if (status === "pending") {
    return <Skeleton count={numberTovarsInPage}></Skeleton>;
  }
  if (status === "failed") {
    return <p>Ошибка сервера. Жалька</p>;
  }

  return (
    <>
      <button onClick={removeParams}>Очистить поиск</button>
      <FilterAndSort maxCurrentPrice={maxPrice}></FilterAndSort>
      {tovars.length !== 0 ? (
        <>
          <TovarList tovars={tovars} page={page} ntip={numberTovarsInPage} />
        </>
      ) : (
        <div>Корзина пуста</div>
      )}
    </>
  );
};
