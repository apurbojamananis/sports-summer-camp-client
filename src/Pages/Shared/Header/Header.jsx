import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto md:min-h-[120px]">
      <div className="navbar md:pt-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Instructors</Link>
              </li>
              <li>
                <Link>Classes</Link>
              </li>
              <li>
                <Link>Dashboard </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src="./BlackLogo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-primary font-medium">
          <ul className="flex ">
            <li className=" py-2 rounded mx-1 ">
              <Link className="hover:border-b-4 border-red-300 pb-2 px-2">
                {" "}
                Home
              </Link>
            </li>
            <li className=" px-3 py-2 rounded mx-1">
              <Link className="hover:border-b-4 border-red-300 pb-2 px-2">
                {" "}
                Instructors
              </Link>
            </li>
            <li className=" px-3 py-2 rounded mx-1">
              <Link className="hover:border-b-4 border-red-300 pb-2 px-2">
                {" "}
                Classes
              </Link>
            </li>
            <li className=" px-3 py-2 rounded mx-1">
              <Link className="hover:border-b-4 border-red-300 pb-2 px-2">
                {" "}
                Dashboard{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="bg-red-300 py-2 px-4 rounded text-black font-medium">
            Sign In
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-neutral btn-circle avatar  ">
            <div className="w-10 rounded-full">
              <img src="https://randomuser.me/api/portraits/thumb/men/30.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between py-3 hover:bg-red-200">
                Profile
              </Link>
            </li>
            <li>
              <Link className="justify-between py-3 hover:bg-red-200">
                Settings
              </Link>
            </li>
            <li>
              <Link className="justify-between py-3 hover:bg-red-200 ">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
