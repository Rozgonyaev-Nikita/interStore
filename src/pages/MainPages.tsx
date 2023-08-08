import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterAndSort, TovarList } from "../components";
import { Skeleton, Sort, Categories } from "../UI";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarsSelector, tovarsThunk } from "../store/FetchTovars";
import { sortFilterTovars } from "../utils/sortAndFilter";
import { ITovar } from "../interface/tovar.interface";
import { useSearchParams } from "react-router-dom";

export const MainPages = () => {
  const [page] = useState<number>(0);
  const [sort, setSort] = useState({ categor: "id", filterCategory: [] });
  const [categor, setCategory] = useState<string>("id");
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  // const params = new URLSearchParams(document.location.search);
  const { tovars: allTovars, status } = useAppSelector(tovarsSelector);

  const numberTovarsInPage = 8;

  // console.log("filtercateg", filterCategory);
  useEffect(() => {
    if (allTovars.length == 0) {
      dispatch(tovarsThunk());
    }
  }, [allTovars.length, dispatch, categor, filterCategory]);

  const tovars: ITovar[] = useMemo(
    () => sortFilterTovars(categor, allTovars, searchParams, filterCategory),
    [categor, allTovars, searchParams, filterCategory]
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
      <FilterAndSort
        categor={categor}
        setCategory={setCategory}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        currentTovars={currentTovars}
      ></FilterAndSort>
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
