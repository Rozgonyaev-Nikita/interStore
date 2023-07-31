import { describe, expect, expectTypeOf, test } from "vitest";
import { logRoles, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

const data = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
];

interface Iput {
  input: number;
  output: number;
}

describe("Accordion test", () => {
  test("should show title all the time", () => {
    render(
      <Accordion title="Testing" data={data}>
        <div>
          <h4>Content</h4>
          <div role="generic">fh</div>
        </div>
      </Accordion>
    );

    // expect(screen.getByText(/Testing/i)).toBeDefined();
    // expect(screen.getByText(/Content/i)).toBeDefined();
    expect(screen.getByText(/ent/));
  });
  test("test role data", () => {
    render(
      <Accordion title="Testing">
        <div>karp</div>
      </Accordion>
    );

    expect(screen.queryByText(/List void/i)).not.toBeNull();
  });
  test("test button role", () => {
    render(
      <Accordion title="Testing">
        <button>cazan</button>
      </Accordion>
    );

    expect(screen.getByRole("button", { name: "cazan" }));
  });
  test("test title", () => {
    render(
      <Accordion title="Testing">
        <button title="buto">cazan</button>
      </Accordion>
    );

    // expect(screen.queryByTitle("Testing"));
    const titl = screen.queryByTitle("buto");
    expect(titl).not.toBeNull();
  });

  test("karp", () => {
    expect(2 + 2).toBe(4);
  });
  describe.each([
    { input: 1, output: 2 },
    { input: 4, output: 5 },
    { input: 3, output: 4 },
    { input: 1125, output: 1126 },
  ])("Accordion test", ({ input, output }: Iput) => {
    test("kfg", () => {
      expect(input + 1).toBe(output);
    });
  });
  test("should show title all the timejkS", () => {
    render(
      <Accordion title="Testing">
        <div title="di">
          <h3>Content</h3>
          <div role="generic">fh</div>
        </div>
      </Accordion>
    );

    // expect(screen.getByText(/Testing/i)).toBeDefined();
    // expect(screen.getByText(/Content/i)).toBeDefined();
    const scre = screen.getByTestId("div-accord");
    expect(scre).toMatchSnapshot();
  });
});
