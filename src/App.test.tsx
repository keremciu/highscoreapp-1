import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { ScoreButton } from "./components/actions/";

test("renders name input", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("renders Play button if clicks < 10", () => {
  const clicks = 2;
  const onStep = jest.fn();
  const onRestart = jest.fn();
  render(<ScoreButton clicks={clicks} onStep={onStep} onRestart={onRestart} />);

  const button = screen.getByText("PLAY");

  expect(button).toBeInTheDocument();
});

test("renders Restart button if clicks === 10", () => {
  const clicks = 10;
  const onStep = jest.fn();
  const onRestart = jest.fn();
  render(<ScoreButton clicks={clicks} onStep={onStep} onRestart={onRestart} />);

  const button = screen.getByText("RESTART");

  expect(button).toBeInTheDocument();
});

test("doesnt render Play button if clicks equal 10", () => {
  const clicks = 10;
  const onStep = jest.fn();
  const onRestart = jest.fn();
  render(<ScoreButton clicks={clicks} onStep={onStep} onRestart={onRestart} />);

  expect(screen.queryByText("PLAY")).not.toBeInTheDocument();
});

test("doesnt render Restart button if clicks less than 10", () => {
  const clicks = 3;
  const onStep = jest.fn();
  const onRestart = jest.fn();
  render(<ScoreButton clicks={clicks} onStep={onStep} onRestart={onRestart} />);

  expect(screen.queryByText("RESTART")).not.toBeInTheDocument();
});
