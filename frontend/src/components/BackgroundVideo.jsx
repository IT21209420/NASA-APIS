import PropTypes from "prop-types";

/**
 * A component that displays a background video with optional children elements.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.url - The URL of the video file.
 * @param {ReactNode} props.children - The optional children elements to be rendered on top of the video.
 * @returns {JSX.Element} The rendered component.
 */
const BackgroundVideo = ({ children, url }) => {
  return (
    <div className="relative h-screen bg-black-100">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={url} type="video/mp4" />
        {/* Add additional source elements for different video formats */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 ">{children}</div>
    </div>
  );
};

export default BackgroundVideo;

BackgroundVideo.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
