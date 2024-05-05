import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";

import EarthImaginery from "../src/pages/earthImaginery/EarthImaginery";

describe("EarthImaginery", () => {
  let component;

  beforeEach(() => {
    component = render(<EarthImaginery />);
  });

  it("should render", () => {
    expect(component).toBeDefined();
  });

  it("should render the title", () => {
    expect(component.getByText("Earth Imagery")).toBeDefined();
  });
});
