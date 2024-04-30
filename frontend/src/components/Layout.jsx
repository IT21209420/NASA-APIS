import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className="
      bg-red-500
      "
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
