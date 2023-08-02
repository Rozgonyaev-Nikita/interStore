import { FC, useEffect, useState } from "react";
import { ITovar, ITovarProps } from "../../interface/tovar.interface";
import axios from "axios";
import classes from "./SimilarTovar.module.scss";
import { Link } from "react-router-dom";
import { TovarItem } from "..";
import { Skeleton } from "../../UI";

const SimilarTovaList: FC<ITovarProps> = ({ tovar }) => {
  const [simTovars, setSimTovars] = useState<ITovar[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  // console.log("tov", tovar);
  // console.log("шыЕщмфк", tovar);
  // useWhyDidYouUpdate("SimilarTovaList", tovar);

  const getSimilarTovars = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<ITovar[]>(
        `https://fakestoreapi.com/products/category/${tovar.category}?limit=3`
      );
      console.log("tovпр", data);
      setSimTovars(data);
      setLoading(false);
      console.log(isLoading);
    } catch (e) {
      console.log("Плоха с сервером!");
    }
  };

  useEffect(() => {
    getSimilarTovars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tovar]);
  if (isLoading) {
    return (
      <>
        <h2>Похожие товары</h2>
        <Skeleton count={4}></Skeleton>
      </>
    );
  }

  return (
    <>
      {simTovars && (
        <>
          <div>
            <h2>Похожие товары</h2>
            <div className={classes.grid}>
              {simTovars
                .filter((item) => item.id !== tovar.id)
                .map((tovar) => (
                  <Link to={`/${tovar.id}`} key={tovar.id}>
                    <TovarItem tovar={tovar} isFull={false} />
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SimilarTovaList;
