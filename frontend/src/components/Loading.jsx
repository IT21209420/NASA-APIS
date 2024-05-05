/**
 * Represents a loading spinner component.
 * @returns {JSX.Element} The loading spinner component.
 */
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="animate-spin  rounded-full h-32 w-32 border-t-8 border-b-8 border-white"></div>
    </div>
  );
};

export default Loading;
