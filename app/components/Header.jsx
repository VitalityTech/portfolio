import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.my_logo}
          alt="Profile img"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex  items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        HI! I'm Vitaliy Hladchenko
        <Image
          src={assets.hand_icon}
          alt="Hand Icon"
          className="rounded-full w-6"
        />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        frontend web developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I'm frontend developer from Ukraine.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black flex items-center gap-2 text-white dark:bg-transparent"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Profile img"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="/sample-resume.pdf download"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="Profile img" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
