import "./Seprator.css";
const Divider = ({ children }) => {
  return (
    <div className="container">
      <div className="border" />
      {children && <span className="content">{children}</span>}
      <div className="border" />
    </div>
  );
};

export default Divider;
