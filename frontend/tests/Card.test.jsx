import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";

import Card from "../src/components/Card";

// import { useEffect, useState } from "react";
// import Modal from "react-modal";
// import ImageModal from "./ImageModal";

// const Card = ({ photo }) => {
//   useEffect(() => {
//     Modal.setAppElement("#root");
//   }, []);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };
//   return (
//     <div
//       className=" rounded-md p-2 h-48 w-64 shadow-lg
//     bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600
//     "
//     >
//       <img
//         src={photo.img_src}
//         alt={photo.camera.full_name}
//         className="h-32 w-full object-cover cursor-pointer"
//         onClick={openModal}
//       />
//       <div className="mt-2">
//         <h2
//           className="text-sm font-semibold
//         text-white
//         "
//         >
//           {photo.rover.name}
//         </h2>
//         <p
//           className="text-xs
//         text-white
//         "
//         >
//           {photo.earth_date}
//         </p>
//       </div>
//       <ImageModal
//         src={photo.img_src}
//         modalIsOpen={modalIsOpen}
//         closeModal={closeModal}
//         full_name={photo.camera.full_name}
//       />
//     </div>
//   );
// };

// export default Card;

beforeEach(() => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
});
describe("Card", () => {
  it("should render Card component", () => {
    const photo = {
      img_src:
        "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg",
      camera: {
        full_name: "Mast Camera",
      },
      rover: {
        name: "Curiosity",
      },
      earth_date: "2021-08-01",
    };
    const { container } = render(<Card photo={photo} />);
    expect(container).toMatchSnapshot();
  });
});
