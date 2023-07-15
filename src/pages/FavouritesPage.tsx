import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { favouritesSelector } from "../store/ListProductsBasketSlice";
import { TovarList } from "../components";

const FavoritesPage = () => {
  const favourites = useAppSelector(favouritesSelector);

  const navigate = useNavigate();
  if (favourites.length == 0) {
    return <p>Пусто</p>;
  }
  return (
    <div>
      <button onClick={() => navigate("/")} style={{ marginBottom: "15px" }}>
        Назад
      </button>
      <TovarList tovars={favourites}></TovarList>
    </div>
  );
};

export default FavoritesPage;
