import React, { FC, useEffect, useState } from "react";
import { useWhyDidYouUpdate } from "ahooks";
import { ITovar, ITovarProps } from "../../interface/tovar.interface";
import axios from "axios";
import SimilarTovaItem from "./SimilarTovaItem";
import classes from "./SimilarTovar.module.scss";
import { Link } from "react-router-dom";

const SimilarTovaList: FC<ITovarProps> = ({ tovar }) => {
  const [simTovarsAll, setSimTovars] = useState<ITovar[]>([]);
  // console.log("tov", tovar);
  // console.log("шыЕщмфк", tovar);
  // useWhyDidYouUpdate("SimilarTovaList", tovar);

  const getSimilarTovars = async () => {
    const { data } = await axios.get<ITovar[]>(
      `https://fakestoreapi.com/products/category/${tovar.category}`
    );
    console.log("tovпр", data);
    setSimTovars(data);
  };

  const simTovars =
    simTovarsAll && simTovarsAll.filter((item) => item.id !== tovar.id);

  useEffect(() => {
    getSimilarTovars();
  }, [tovar]);

  return (
    <>
      {simTovars && (
        <>
          <div>
            <h2>Похожие товары</h2>
            <div className={classes.grid}>
              {simTovars.map((tovar) => (
                <Link to={`/${tovar.id}`} key={tovar.id}>
                  <SimilarTovaItem tovar={tovar} />
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
