import PropTypes from "prop-types"; // Import PropTypes
import { useLocation } from "react-router-dom";

import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="font-mono h-screen  ">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}

      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Add prop validation for 'children'
};

export default Layout;
