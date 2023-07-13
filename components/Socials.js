//Links
import Link from "next/link";

//Icons
import {
  RiGithubLine,
  RiFacebookLine,
  RiLinkedinBoxFill,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg lg:mr-[60px]">
      <Link
        href={"https://github.com/diiyaapadawy"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.facebook.com/diyaa.almagic.3?mibextid=ZbWKwL"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/diaa-ashraf-367924270"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://wtspee.com/201001667034"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
