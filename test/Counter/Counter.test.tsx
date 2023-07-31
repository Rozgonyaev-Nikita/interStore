import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import React, { useEffect } from "react";

describe("Counter test", () => {
  let coun: HTMLHeadingElement;
  beforeEach(() => {
    render(<Counter></Counter>);
    coun = screen.getByTestId("3ffgnjk");
  });

  test("first test", async () => {
    const plusButton: HTMLButtonElement = screen.getByText("+");
    const clickFn = vi.fn();
    expect(coun.textContent).toBe("0");

    await userEvent.click(plusButton);
    await userEvent.click(plusButton);
    await userEvent.click(plusButton);
    clickFn();
    clickFn();
    expect(clickFn).toHaveBeenCalledTimes(2);

    expect(coun.textContent).toBe("3");
  });
  test("first test", async () => {
    const minusButton: HTMLButtonElement = screen.getByText("-");

    expect(coun.textContent).toBe("0");

    await userEvent.click(minusButton);
    await userEvent.click(minusButton);
    await userEvent.click(minusButton);

    expect(coun.textContent).toBe("-3");
  });
});
