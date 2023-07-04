import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITovar } from "../interface/tovar.interface";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { tovarByIdSelector, tovarsThunk } from "../store/FetchTovars";
import Rating from "@mui/material/Rating";

export const ViewingProducts = () => {
  const { id } = useParams();

  const navigate = useNavigate();

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

  const { title, image, rating } = tovar;
  console.log(tovar);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tovarsThunk());
  }, [dispatch]);

  // async function tovarFetching() {
  //   const {data} = await axios.get<ITovar>(`https://fakestoreapi.com/products/${id}`);
  //   return data;
  // }

  // const {data: tovar = {} as ITovar, isLoading, isError} = useQuery('tovars', tovarFetching, {refetchOnWindowFocus: false});

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      <br />
      <div>
        {tovar && (
          <>
            <img src={image} alt="Товар" width={300} />
            <h1>{title}</h1>
            <div>
              {/* <div style={{ display: "inline-block" }}> */}
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                value={rating.rate}
                precision={0.1}
                readOnly
                style={{ verticalAlign: "middle" }}
              />
              {/* </div> */}

              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                {rating.count}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
