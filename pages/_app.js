import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, PageProps }) {
  const Router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={Router.route} className="h-full">
          <Transition />
          <Component {...PageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
