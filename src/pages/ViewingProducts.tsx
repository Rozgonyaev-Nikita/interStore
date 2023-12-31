import { useNavigate, useParams } from "react-router-dom";
import { ITovar } from "../interface/tovar.interface";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  statusSelector,
  tovarByIdSelector,
  tovarsThunk,
} from "../store/FetchTovars";
import ProductFull from "../components/TovarFull/TovarFull";
import { SimilarTovaList } from "../components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ViewingProducts = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const status = useSelector(statusSelector);
  const tovar: ITovar = useAppSelector(tovarByIdSelector(Number(id))) || {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(tovarsThunk());
    }
  }, [dispatch, status]);

  // async function tovarFetching() {
  //   const {data} = await axios.get<ITovar>(`https://fakestoreapi.com/products/${id}`);
  //   return data;
  // }

  // const {data: tovar = {} as ITovar, isLoading, isError} = useQuery('tovars', tovarFetching, {refetchOnWindowFocus: false});

  return (
    <div>
      <button onClick={() => navigate("/")} style={{ marginBottom: "15px" }}>
        Назад
      </button>
      <br />
      <ProductFull tovar={tovar}></ProductFull>
      <SimilarTovaList tovar={tovar} />
    </div>
  );
};
