//components
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

//Framer Motion
import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exits="hidden"
            className="xl:h1 lg:h1 text-[30px]"
          >
            TransForming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exits="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Creative bilingual/multilingual Front-End Developer Skilled at
            creating a unique customer experience that highlights brand
            messaging, maintains up to date awareness of technological trends
            and technological advances
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.dev
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exits="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.dev>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* myImage */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exits="hidden"
          transition={{ duration: 1, ease: "r=easeInOut" }}
          className="w-full h-full max-w-[690px] max-h-[615px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
