import React from "react";

const NoContentFound = ({ content }) => {
  return (
    <div className="flex items-center justify-center h-[58vh] w-full ">
      <h1 className="text-4xl font-bold text-gray-700">{content}</h1>
    </div>
  );
};

export default NoContentFound;
