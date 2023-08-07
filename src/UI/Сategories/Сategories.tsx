import React from "react";
import mensClothing from "../../assets/mensClothing.jpg";
import womenClothing from "../../assets/womenClothing.jpg";
import electronics from "../../assets/electronics.jpg";
import jewelery from "../../assets/jewelery.jpg";
import otherTovar from "../../assets/otherTovar.jpg";
import cancel from "../../assets/cancel.png";
import classes from "./Сategories.module.css";

interface IСategories {
  setFilterCategory: (category: string) => void;
  filterCategory: string;
}

const Сategories: React.FC<IСategories> = ({
  setFilterCategory,
  filterCategory,
}) => {
  const categories = [
    mensClothing,
    womenClothing,
    electronics,
    jewelery,
    otherTovar,
    cancel,
  ];
  const categoriesFilter: string[] = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
    "other",
    "all",
  ];
  const label = [
    "Мужская одежда",
    "Женская одежда",
    "Электроника",
    "Драгоценности",
    "Другое",
    "Все товары",
  ];

  return (
    <div className={classes.wrapper}>
      {categories.map((category, index) => (
        <div
          className={classes.card}
          key={index}
          onClick={() => setFilterCategory(categoriesFilter[index])}
        >
          <img
            src={category}
            key={index}
            alt="Мужская одежда"
            className={classes.img}
          />
          <p
            className={
              (classes.label,
              filterCategory === categoriesFilter[index] ? classes.p : "")
            }
          >
            {label[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Сategories;
