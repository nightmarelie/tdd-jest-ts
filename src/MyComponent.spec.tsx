import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should wrap child text", () => {
    render(<MyComponent>Hello</MyComponent>);

    expect(screen.getByRole("textbox")).toHaveTextContent("Hello");
  });
});
