
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Initial status is OFF", () => {
  render(<App />);
  expect(screen.getByText("Status: OFF")).toBeInTheDocument();
});

test("Toggle changes OFF to ON", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /toggle/i }));
  expect(screen.getByText("Status: ON")).toBeInTheDocument();
});

test("Toggle changes ON back to OFF", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /toggle/i });

  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText("Status: OFF")).toBeInTheDocument();
});
