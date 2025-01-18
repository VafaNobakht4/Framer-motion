"use client";
import { motion } from "framer-motion";
import React from "react";

const HomePage = () => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center min-h-screen mx-10 flex-col sm:flex-row space-y-10 sm:space-y-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        <p className="text-center text-black text-3xl">Test World</p>
        <div className="min-w-32 max-w-96 h-96 bg-sky-500 flex justify-center items-center overflow-y-auto p-8 rounded-2xl md:ml-10">
          <span className="text-center text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi a
            vero cupiditate culpa et corrupti architecto ex animi! Maiores est
            quaerat sequi, ullam autem expedita iusto iure sint veritatis quis?
          </span>
        </div>
      </motion.div>
      <div></div>
    </>
  );
};

export default HomePage;
