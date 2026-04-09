import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

describe("HomePage", () => {
  it("renders the core landing sections", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /a\.\s*j\.\s*r\.\s*lewis/i })).toBeInTheDocument();
    expect(screen.getByText(/my background/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "PhD" })).toBeInTheDocument();
    expect(screen.getByText(/phd thesis/i)).toBeInTheDocument();
    expect(screen.getByText(/apj paper/i)).toBeInTheDocument();
    expect(screen.getByText(/hi, i'm alex/i)).toBeInTheDocument();
    expect(screen.getByText(/observing at alma\/laboca, atacama desert, chile/i)).toBeInTheDocument();
    expect(screen.getByText(/what i offer/i)).toBeInTheDocument();
    expect(screen.getByText(/selected projects/i)).toBeInTheDocument();
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it("includes the four selected project cards", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "RFP LangGraph Agent" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Digital Speed" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Downing LLP" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Hyperhumans" })).toBeInTheDocument();
  });
});
