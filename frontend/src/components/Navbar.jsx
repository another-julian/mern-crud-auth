import logo from "../assets/logo.svg";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 px-40 z-20 py-2 bg-light flex shadow-2xs w-full justify-between items-center">
      <Link to="/" className="font-bold text-2xl py-1">
        <span className="py-1 px-4 bg-secondary text-light">T</span>
        <span className="text-secondary"> T</span>
      </Link>
      <ul className="flex gap-4 text-[1.1rem]">
        <li>
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </li>
        <li>
          <Link className="py-2 px-4 bg-primary text-light">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
