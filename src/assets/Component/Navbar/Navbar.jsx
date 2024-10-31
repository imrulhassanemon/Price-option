import { useState } from "react";
import Link from "../Link/Link";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Our Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
            open === true ? <RxCross2 ></RxCross2>:<HiMenu></HiMenu>
        }

      </div>
      <ul className= {`md:flex ${open === true? "top-16" : ' -top-60'} absolute bg-gray-600 text-white duration-700 md:static`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
