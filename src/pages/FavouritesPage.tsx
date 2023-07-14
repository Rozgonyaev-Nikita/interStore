import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { favouritesSelector } from "../store/FavoritesTovars";
import { TovarList } from "../components";

const FavoritesPage = () => {
  const favourites = useAppSelector(favouritesSelector);
  console.log(favourites);

  return (
    <div>
      <TovarList tovars={favourites}></TovarList>
    </div>
  );
};

export default FavoritesPage;
