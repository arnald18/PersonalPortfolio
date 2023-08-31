import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";

export default function Header() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Arnaldo Henriquez
            </span>
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <NavLink
                path="/AboutMe"
                activePath={currentPage}
                title="About Me"
              />
              <NavLink
                path="/Contact"
                activePath={currentPage}
                title="Contact"
              />
              <NavLink
                path="/Portfolio"
                activePath={currentPage}
                title="Portfolio"
              />
              <NavLink path="/Resume" activePath={currentPage} title="Resume" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
