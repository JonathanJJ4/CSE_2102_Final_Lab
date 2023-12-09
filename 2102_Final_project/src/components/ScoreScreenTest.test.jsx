import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Score from "../components/ScoreScreen";

test("should render Login component", () => {
  render(
    <MemoryRouter>
      <Score />
    </MemoryRouter>
  );

  const scoreHeader = screen.getByText("Your Score:");
  expect(scoreHeader).toBeInTheDocument();
});