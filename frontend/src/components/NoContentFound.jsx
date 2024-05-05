import PropTypes from "prop-types";

/**
 * Renders a component to display a message when no content is found.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.content - The content to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
const NoContentFound = ({ content }) => {
  return (
    <div className="flex items-center justify-center h-[58vh] w-full ">
      <h1 className="text-4xl font-bold text-gray-200">{content}</h1>
    </div>
  );
};

export default NoContentFound;

NoContentFound.propTypes = {
  content: PropTypes.string.isRequired,
};
