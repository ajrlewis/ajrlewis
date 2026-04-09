import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

describe("HomePage", () => {
  it("renders the core landing sections", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /alex lewis/i })).toBeInTheDocument();
    expect(screen.getByText(/what i offer/i)).toBeInTheDocument();
    expect(screen.getByText(/selected projects/i)).toBeInTheDocument();
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it("includes the four selected project cards", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "RFP LangGraph Agent" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Speedy AI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Downing LLP" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Hyperhumans" })).toBeInTheDocument();
  });
});
