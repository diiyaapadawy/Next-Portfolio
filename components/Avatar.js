import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/Diao.png"}
        alt=""
        width={737}
        height={678}
        className="translate-y-0 translate-x-[30%] w-[90%] h-[90%]"
      />
    </div>
  );
};

export default Avatar;

