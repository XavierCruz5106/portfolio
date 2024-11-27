import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
