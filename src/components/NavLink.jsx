import { Link } from "react-router-dom";

export default function NavLink({ path, activePath, title }) {
  return (
    <li>
      <Link
        to={path}
        className={
          path === activePath
            ? " block py-2 pr-4 pl-3 lg:p-0 text-lime-700"
            : "block py-2 pr-4 pl-3 lg:p-0 text-white"
        }
      >
        {title}
      </Link>
    </li>
  );
}
