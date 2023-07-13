

//next Link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center xl:px-0 px-16 xl:h-[90px]">
      <div className="mx-10 ">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-3 py-1">
          {/* logo */}
          <Link href={"/"}>
            <h2 className="text-md font-extrabold lg:text-[50px]">Diaa Ashraf</h2>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
