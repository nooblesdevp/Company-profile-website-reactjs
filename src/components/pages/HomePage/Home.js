import { motion } from "framer-motion";
import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { animateEffectect } from "../animation";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../Services/Data";

function Home() {
  return (
    <motion.div variants={animateEffectect} initial="hidden" animate="visible">
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </motion.div>
  );
}

export default Home;
