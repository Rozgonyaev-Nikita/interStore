import mensClothing from "../../assets/mensClothing.jpg";
import womenClothing from "../../assets/womenClothing.jpg";
import electronics from "../../assets/electronics.jpg";
import jewelery from "../../assets/jewelery.jpg";
import otherTovar from "../../assets/otherTovar.jpg";
import classes from "./Categories.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  changeFilterCategory,
  filterSortSelector,
} from "../../store/FilterSortSlice";

const Сategories = () => {
  const { filterCategory } = useAppSelector(filterSortSelector);
  const dispatch = useAppDispatch();

  const categories = [
    mensClothing,
    womenClothing,
    electronics,
    jewelery,
    otherTovar,
  ];
  const categoriesFilter: string[] = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
    "other",
  ];
  const label = [
    "Мужская одежда",
    "Женская одежда",
    "Электроника",
    "Драгоценности",
    "Другое",
  ];

  return (
    <div className={classes.wrapper}>
      {categories.map((category, index) => (
        <div
          className={classes.card}
          key={index}
          onClick={() => dispatch(changeFilterCategory(index))}
        >
          <img
            src={category}
            key={index}
            alt="Мужская одежда"
            className={classes.img}
          />
          <p
            className={[
              classes.label,
              filterCategory.find((item) => item === categoriesFilter[index])
                ? classes.p
                : "",
            ].join(" ")}
          >
            {label[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Сategories;
