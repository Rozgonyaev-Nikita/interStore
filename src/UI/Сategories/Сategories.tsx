import React from "react";
import mensClothing from "../../assets/mensClothing.jpg";
import womenClothing from "../../assets/womenClothing.jpg";
import electronics from "../../assets/electronics.jpg";
import jewelery from "../../assets/jewelery.jpg";
import otherTovar from "../../assets/otherTovar.jpg";
import classes from "./Сategories.module.css";

interface IСategories {
  setFilterCategory: (category: string[]) => void;
  filterCategory: string[];
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
  console.log("index", filterCategory);
  const myFilter = (index: number) => {
    const newFilterCategory = [...filterCategory]; // создаем копию массива filterCategory

    if (newFilterCategory.includes(categoriesFilter[index])) {
      newFilterCategory.splice(
        newFilterCategory.indexOf(categoriesFilter[index]),
        1
      );
    } else {
      newFilterCategory.push(categoriesFilter[index]);
    }
    setFilterCategory(newFilterCategory);
    console.log("catIndex", categoriesFilter[index]);
  };
  //
  ////
  //

  return (
    <div className={classes.wrapper}>
      {categories.map((category, index) => (
        <div
          className={classes.card}
          key={index}
          onClick={() => myFilter(index)}
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
              filterCategory.find((item) => item === categoriesFilter[index])
                ? classes.p
                : "")
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
