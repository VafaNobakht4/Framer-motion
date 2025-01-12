"use client";
import { motion } from "framer-motion";
import React from "react";

const HomePage = () => {
  return (
    <motion.div
      className="flex mx-auto h-screen"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 120 }}
    >
      Hi this is test
    </motion.div>
  );
};

export default HomePage;
