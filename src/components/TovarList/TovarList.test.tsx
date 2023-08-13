import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import store from "../../store/index";
import TovarList from "./TovarList";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { ITovar } from "../../interface/tovar.interface";

const BASE_URL = "https://jsonplaceholder.typicode.com";

vi.mock("axios");

export const fetchUsers = async () => {
  return (await axios.get(`${BASE_URL}/users`)).data;
};

describe("TovarList Test", () => {
  const tovars: ITovar[] = [
    {
      id: 0,
      title: "fh",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
    {
      id: 1,
      title: "dfgh",
      price: 76,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ];
  const renderCompon = (elem: JSX.Element) => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={elem} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  };

  // beforeEach(() => {

  // });

  test("Тест на отрисовку компонента TovarList", async () => {
    renderCompon(<TovarList tovars={tovars}></TovarList>);
    const list = screen.getByRole("list");
    expect(list).toBeDefined();
  });
  test("Тест на совпадение карточек и элементов массива", async () => {
    renderCompon(<TovarList tovars={tovars}></TovarList>);
    const list = document.querySelector(".itemsGrid");
    expect(list?.childElementCount).toBe(tovars.length);
  });
});
