import { useCallback, useEffect, useMemo, useState } from "react";
import { TovarList } from "../components";
import { Skeleton, Sort } from "../UI";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarsSelector, tovarsThunk } from "../store/FetchTovars";
import { sortFilterTovars } from "../utils/sortAndFilter";
import { ITovar } from "../interface/tovar.interface";
import { useSearchParams } from "react-router-dom";

export const MainPages = () => {
  const [page] = useState<number>(0);
  const [categor, setCategory] = useState<string>("id");
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  // const params = new URLSearchParams(document.location.search);
  const { tovars: allTovars, status } = useAppSelector(tovarsSelector);

  const numberTovarsInPage = 8;

  useEffect(() => {
    if (allTovars.length == 0) {
      dispatch(tovarsThunk());
    }
  }, [allTovars.length, dispatch, categor]);

  const tovars: ITovar[] = useMemo(
    () => sortFilterTovars(categor, allTovars, searchParams),
    [categor, allTovars, searchParams]
  );

  if (status === "pending") {
    return <Skeleton count={numberTovarsInPage}></Skeleton>;
  }
  if (status === "failed") {
    return <p>Ошибка сервера. Жалька</p>;
  }

  return (
    <>
      {tovars.length !== 0 ? (
        <>
          <Sort
            options={[
              { value: "title", name: "По заголовку" },
              { value: "description", name: "По описанию" },
              { value: "category", name: "По категории" },
            ]}
            select={categor}
            setSelect={setCategory}
          ></Sort>
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
