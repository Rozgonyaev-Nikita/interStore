import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { getByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import store from "../src/store/index";
import TovarItem from "../src/components/TovarItem/TovarItem";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Counter test", () => {
  beforeEach(() => {
    const tovar = {
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
    const setOpen = vi.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={<TovarItem tovar={tovar} setOpen={setOpen}></TovarItem>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test("firdst test", async () => {
    expect(screen.getByRole("img"));
    const user = userEvent.setup();

    const spyAnchorTag = vi.spyOn(user, "click");
    await user.click(screen.getByTestId("favo"));
    expect(spyAnchorTag).toHaveBeenCalledOnce();
  });
  test("fj test", async () => {
    const useri = userEvent.setup();

    const spyAnchorTagi = vi.spyOn(useri, "click");
    await useri.click(screen.getByTestId("addkor"));
    await useri.click(screen.getByTestId("addkor"));
    await useri.click(screen.getByTestId("addkor"));
    expect(spyAnchorTagi).toHaveBeenCalled();
    // screen.debug();
    expect(screen.getByTestId("countBadge").textContent).toBe("3");
  });
  test("karpf testiki", () => {
    const ln = document.getElementsByClassName("detailed");
    const firstLiInDiv = document.body.getAttribute("class");
    // const ln = document.getElementsByClassName("detailed");
    // console.log(screen.getByRole("link").className);
    console.log(firstLiInDiv);
  });
});
