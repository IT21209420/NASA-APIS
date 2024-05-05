import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ImageModal from "../src/components/ImageModal";

describe("ImageModal", () => {
  it("renders the ImageModal component with the correct props", () => {
    render(
      <ImageModal
        src="https://example.com/image.jpg"
        modalIsOpen={true}
        closeModal={() => {}}
        full_name="Image"
      />
    );

    const imgElement = document.querySelector("img");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(imgElement).toHaveAttribute("alt", "Image");
  });
});
