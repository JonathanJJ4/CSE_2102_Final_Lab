import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Login from "../components/LoginScreen";

test("should render Login component", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const loginHeader = screen.getByText("LOGIN PAGE");
  expect(loginHeader).toBeInTheDocument();

  const emailLabel = screen.getByText("EMAIL:");
  expect(emailLabel).toBeInTheDocument();

  const passwordLabel = screen.getByText("PASSWORD:");
  expect(passwordLabel).toBeInTheDocument();

  const loginButtonLabel = screen.getByText("Login");
  expect(loginButtonLabel).toBeInTheDocument();

  
});