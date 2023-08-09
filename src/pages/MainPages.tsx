import { useEffect, useMemo, useState } from "react";
import { FilterAndSort, TovarList } from "../components";
import { Skeleton } from "../UI";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarsSelector, tovarsThunk } from "../store/FetchTovars";
import { sortFilterTovars } from "../utils/sortAndFilter";
import { ITovar } from "../interface/tovar.interface";
import { useSearchParams } from "react-router-dom";
import { filterSortSelector } from "../store/FilterSortSlice";
import { ISort } from "../interface/other.interface";

export const MainPages = () => {
  const [page] = useState<number>(0);
  const [categor, setCategory] = useState<string>("id");
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  // const params = new URLSearchParams(document.location.search);
  const { tovars: allTovars, status } = useAppSelector(tovarsSelector);
  const filterSort: ISort = useAppSelector(filterSortSelector);

  const numberTovarsInPage = 8;

  // console.log("filtercateg", filterCategory);
  useEffect(() => {
    if (allTovars.length == 0) {
      dispatch(tovarsThunk());
    }
  }, [allTovars.length, dispatch, filterSort]);

  const tovars: ITovar[] = useMemo(
    () => sortFilterTovars(allTovars, searchParams, filterSort),
    [filterSort, allTovars, searchParams]
  );
  const currentTovars = Math.max(...tovars.map((item) => item.price));
  console.log("main render");

  if (status === "pending") {
    return <Skeleton count={numberTovarsInPage}></Skeleton>;
  }
  if (status === "failed") {
    return <p>Ошибка сервера. Жалька</p>;
  }

  return (
    <>
      <FilterAndSort currentTovars={currentTovars}></FilterAndSort>
      {tovars.length !== 0 ? (
        <>
          <TovarList tovars={tovars} page={page} ntip={numberTovarsInPage} />
          {/* <PaginationC
            tovars={tovars}
            page={page}
            setPage={setPage}
            ntip={numberTovarsInPage}
          /> */}
        </>
      ) : (
        <div>Корзина пуста</div>
      )}
    </>
  );
};
