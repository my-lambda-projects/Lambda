import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without errors", () => {
  render(<App />);
});

test("renders the app header", () => {
  render(<App />);

  const header = screen.getByText(/add new animal/i); // regex string - i means case insensitive

  expect(header).toBeInTheDocument();

  // other possible assertions
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/add new animal/i);

  // negative assertions
  expect(header).not.toBeFalsy();
  expect(header).not.toHaveTextContent(/add new bird/i);
});
