import { useEffect, useMemo, useState } from "react";
import { TestCompon, TovarList } from "../components";
import { Skeleton, Sort } from "../UI";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarsSelector, tovarsThunk } from "../store/FetchTovars";

export const MainPages = () => {
  const [page] = useState<number>(0);
  const [category, setCategory] = useState<string>("default");

  const dispatch = useAppDispatch();

  const { tovars: allTovars, status } = useAppSelector(tovarsSelector);

  const [searchParams] = useSearchParams();

  const numberTovarsInPage = 8;

  // const tovarsFetching = async() => {
  //  const {data} = await axios.get<ITovar[]>('https://fakestoreapi.com/products');
  //   return data;
  // }
  // const {data: allTovars = [] as ITovar[], isLoading, isError} = useQuery('tovars', tovarsFetching, {refetchOnWindowFocus: false});
  console.log("categ", category);
  useEffect(() => {
    if (allTovars.length == 0) {
      dispatch(tovarsThunk());
    }
  }, [allTovars.length, dispatch]);

  const tovars = useMemo(() => {
    if (searchParams.get("karp")) {
      return allTovars.filter((items) =>
        items.title.toLowerCase().includes(searchParams.get("karp") || "")
      );
    }
    searchParams.delete("karp");
    return allTovars;
  }, [allTovars, searchParams]);

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
            select={category}
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
