import PropTypes from "prop-types"; // Import PropTypes
import { useLocation } from "react-router-dom";

import Header from "./Header";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loading from "./Loading";

/**
 * Renders the layout component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */

const Layout = ({ children }) => {
  const { userLoading } = useContext(AuthContext);

  const location = useLocation();
  return (
    <div>
      {userLoading &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loading />
        </div>
      ) : (
        <div className="font-mono h-screen  ">
          {location.pathname !== "/login" &&
            location.pathname !== "/register" && <Header />}
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Add prop validation for 'children'
};

export default Layout;
