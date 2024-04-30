// Card.jsx
import React from "react";

const Card = ({ photo }) => {
  return (
    <div className="border rounded-md p-2 h-64 w-64">
      <img
        src={photo.img_src}
        alt={photo.camera.full_name}
        className="h-32 w-full object-cover"
      />
      <div className="mt-2">
        <h2 className="text-sm font-bold">{photo.rover.name}</h2>
        <p className="text-xs">{photo.earth_date}</p>
      </div>
    </div>
  );
};

export default Card;
