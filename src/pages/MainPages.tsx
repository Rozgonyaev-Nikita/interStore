import { useEffect, useMemo, useState } from "react";
import { TovarList } from "../components";
import { PaginationC, Skeleton } from "../UI";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarsSelector, tovarsThunk } from "../store/FetchTovars";

export const MainPages = () => {
  const [page, setPage] = useState<number>(0);

  const dispatch = useAppDispatch();

  const { tovars: allTovars, status } = useAppSelector(tovarsSelector);

  const [searchParams] = useSearchParams();

  const numberTovarsInPage = 8;

  // const tovarsFetching = async() => {
  //  const {data} = await axios.get<ITovar[]>('https://fakestoreapi.com/products');
  //   return data;
  // }
  // const {data: allTovars = [] as ITovar[], isLoading, isError} = useQuery('tovars', tovarsFetching, {refetchOnWindowFocus: false});

  useEffect(() => {
    dispatch(tovarsThunk());
  }, [dispatch]);

  console.log("rend", allTovars);

  const tovars = useMemo(() => {
    if (searchParams.get("karp")) {
      return allTovars.filter((items) =>
        items.title.toLowerCase().includes(searchParams.get("karp") || "")
      );
    }
    searchParams.delete("karp");
    return allTovars;
  }, [allTovars, searchParams]);

  console.log("tovars", tovars);

  // if(isLoading){
  //    return <Skeleton></Skeleton>
  // }

  // if(isError){
  //   return <h1>Ошибка нахой!</h1>
  // }
  if (status === "pending") {
    return <Skeleton></Skeleton>;
  }
  if (status === "failed") {
    return <p>Ошибка сервера. Жалька</p>;
  }

  return (
    <>
      {tovars.length !== 0 ? (
        <>
          <TovarList
            tovars={tovars}
            page={page}
            ntip={numberTovarsInPage}
          ></TovarList>
          <PaginationC
            tovars={tovars}
            page={page}
            setPage={setPage}
            ntip={numberTovarsInPage}
          ></PaginationC>
        </>
      ) : (
        <div>Корзина пуста</div>
      )}
    </>
  );
};
