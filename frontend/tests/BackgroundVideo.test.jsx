import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import BackgroundVideo from "../src/components/BackgroundVideo";

describe("BackgroundVideo", () => {
  it("renders the BackgroundVideo component with the correct props", () => {
    const { container } = render(
      <BackgroundVideo url="https://example.com/video.mp4">
        <h1>Test</h1>
      </BackgroundVideo>
    );

    const videoElement = container.querySelector("video");
    const sourceElement = container.querySelector("source");
    const h1Element = container.querySelector("h1");

    expect(videoElement).toBeInTheDocument();
    expect(sourceElement).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute(
      "src",
      "https://example.com/video.mp4"
    );
    expect(h1Element).toHaveTextContent("Test");
  });
});
