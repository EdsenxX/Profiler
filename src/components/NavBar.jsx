// Dependencies
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="text-white flex p-5 bg-primary-100 items-center shadow-md shadow-secondary-100/30 justify-between">
      <h1 className="font-title text-4xl">Profiler</h1>
      <div className="flex gap-4 text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
