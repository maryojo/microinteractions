import React from "react";
import { motion } from "framer-motion";

const Step = ({ number, current }) => {
  let status =
    number === current ? "active" : number < current ? "done" : "todo";
  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={status}
        variants={{
          active: {
            scale: 1,
            transition:{
              delay: 0,
              duration: 0.2,
            }
          },
          done: {
            scale: 1.25,
          },
          
        }}
        transition={{ duration: 0.5, delay: 0.2, type: 'tween', ease: 'circOut' }}
        className="absolute inset-0 bg-green-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: status === "done" ? "#16a34a" : "#fff",
          borderColor:
            status === "done"
              ? "#16a34a"
              : status === "active"
              ? "#ffb1b1"
              : "#e5e5e5",
          color:
            status === "done"
              ? "#fff"
              : status === "active"
              ? "#ffb1b1"
              : "#e5e5e5",
        }}
        transition={{
          duration: 0.2,
        }}
        className={`relative border-[1.9px] rounded-full w-8 h-8 flex justify-center items-center`}
      >
        {status === "done" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M3 12l5 5L20 4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
              }}
            />
          </svg>
        ) : (
          number
        )}
      </motion.div>
    </div>
  );
};

export default Step;
