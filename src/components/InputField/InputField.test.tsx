import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputField } from "./InputField";
import "@testing-library/jest-dom"; // for toBeInTheDocument

describe("InputField", () => {
  it("renders label and input", () => {
    render(<InputField label="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("renders helper text when provided", () => {
    render(<InputField label="Test Label" helperText="This is helper text" />);
    const helperText = screen.getByText(/This is helper text/i);
    expect(helperText).toBeInTheDocument();
  });

  it("renders password input when type is password", () => {
    render(<InputField label="Password" type="password" />);
    const input = screen.getByLabelText(/Password/i);
    expect(input).toHaveAttribute('type', 'password');
  });
});
