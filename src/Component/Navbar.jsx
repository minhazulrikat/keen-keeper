import { House, RotateCwClock , ChartLine} from "lucide-react";
import NavLink from "./NavLink";

const Navbar = () => {
  const link = (
    <>
      <NavLink href={"/"} >
       
         <span className="flex gap-1 items-center"> <House size={14} /> Home</span>
  
      </NavLink>
      <NavLink href={"/timeline"}>
      <span className="flex gap-1 items-center"> <RotateCwClock size={14} /> Timeline </span>
        
      </NavLink>
      <NavLink href={"/stats"}>
      <span className="flex gap-1 items-center"> <ChartLine size={14} /> Stats </span>
      </NavLink>
    </>
  );
  return (
    <nav className="shadow-sm bg-base-100">
      <div className="navbar mx-auto container px-4 ">
        <div className="flex-1">
          <a className="text-base font-bold text-base-content md:text-3xl">
            Keen<span className="text-primary">Keeper</span>
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
