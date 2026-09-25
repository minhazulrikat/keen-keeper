import NavLink from "./NavLink";

const Navbar = () => {
  const link = (
    <>
      <NavLink href={"/"} >
        <li>
          Home
        </li>
      </NavLink>
      <NavLink href={"/timeline"}>
        <li>
          Timeline
        </li>
      </NavLink>
      <NavLink href={"/stats"}>
        <li>
         Stats
        </li>
      </NavLink>
    </>
  );
  return (
    <nav className="shadow-sm bg-base-100">
      <div className="navbar mx-auto container px-4 ">
        <div className="flex-1">
          <a className="text-base font-bold text-base-content md:text-3xl">
            Adiyat<span className="text-primary">Keeper</span>
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal gap-1 px-1 text-xs">
            {link}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
