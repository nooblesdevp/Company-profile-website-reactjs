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

function Product() {
  return (
    <motion.div variants={animateEffectect} initial="hidden" animate="visible">
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </motion.div>
  );
}

export default Product;
