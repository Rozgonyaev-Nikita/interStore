import { beforeEach, describe, expect, expectTypeOf, test, vi } from "vitest";
import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestCompon from "../../src/components/TestCompon";
import React from "react";

describe("Сommon describe", () => {
  // test("input test", async () => {
  //   render(<TestCompon value={val} onChange={fnc}></TestCompon>);
  //   const inp: HTMLInputElement = screen.getByTestId("inptest");
  //   await userEvent.type(inp, "582");
  //   expect(fnc).toBeCalledWith("5");
  // });
  const karp = {
    name: "kl",
    age: 18,
  };
  const cazan = {
    name: "kl",
    age: 17,
  };
  test("clearButton test", async () => {
    const value = "h";
    const fnc = vi.fn((text) => (text = value));
    render(<TestCompon></TestCompon>);
    const clr: HTMLButtonElement = screen.getByTestId("clearButton");
    const inp: HTMLInputElement = screen.getByTestId("inptest");

    await userEvent.type(inp, "Ввод...");
    expect(inp.value).toBe("Ввод...");

    await userEvent.click(clr);

    expect(inp.value).toBe("Это успех нахой");
  });
  test("input test3", async () => {
    render(<TestCompon></TestCompon>);
    const inp: HTMLInputElement = screen.getByTestId("inptest");
    const clr: HTMLButtonElement = screen.getByTestId("clearButton");

    await userEvent.click(clr);
    expect(inp.value).toBe("Это успех нахой");
  });

  test("equal test", () => {
    // expect(x).toEqual(y);
  });
});
