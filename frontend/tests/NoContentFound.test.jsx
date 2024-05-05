import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import NoContentFound from "../src/components/NoContentFound";

describe("NoContentFound", () => {
  it("renders the NoContentFound component with the correct content", () => {
    const { container } = render(<NoContentFound content="No content found" />);
    const h1Element = container.querySelector("h1");

    expect(h1Element).toHaveTextContent("No content found");
  });
});
