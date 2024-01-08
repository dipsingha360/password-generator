import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" bg-slate-950">
      <div className="flex mx-72 justify-between items-center py-5">
        <div className="logo ">
          <h1 className="font-bold uppercase text-3xl">LOGO</h1>
        </div>
        <div className="nav-links">
          <ul className="flex gap-8 ">
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="./about">About</Link>
            </li>
            <li>
              <Link href="./contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
