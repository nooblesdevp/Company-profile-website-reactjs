import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../Services/Data";
import { animateEffectect } from "../animation";
import { motion } from "framer-motion";
function Services() {
  return (
    <motion.div variants={animateEffectect} initial="hidden" animate="visible">
      <Pricing />
    </motion.div>
  );
}

export default Services;
