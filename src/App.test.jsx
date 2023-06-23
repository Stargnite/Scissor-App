import React from "react";
import App from "./App";
import { render } from "react-dom";
import { render, screen } from "@testing-library/react";

test("string", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
