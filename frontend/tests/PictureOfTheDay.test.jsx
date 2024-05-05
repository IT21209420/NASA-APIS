import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import PictureOfTheDay from "../src/pages/pictureOfTheDay/PictureOfTheDay";

describe("PictureOfTheDay", () => {
  let component;

  beforeEach(() => {
    component = render(<PictureOfTheDay />);
  });

  it("should render", () => {
    expect(component).toBeDefined();
  });

  it("should render the title", () => {
    expect(component.getByText("Picture of the Day")).toBeDefined();
  });
});
