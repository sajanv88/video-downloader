const Layout = ({ children }) => (
  <div className="container mx-auto" style={{ width: "950px" }}>
    <div className="flex flex-col px-4 py-2">{children}</div>
  </div>
);
export default Layout;
