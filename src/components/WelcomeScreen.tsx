'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = ['Hello', 'Halo', '你好', 'こんにちは', '안녕하세요', 'Bonjour', 'Hola'];

export const WelcomeScreen = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // This interval cycles through the greetings
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === greetings.length - 1) {
          clearInterval(interval); // Stop the interval at the last greeting
          // Set a timeout to fade out the whole screen
          setTimeout(() => {
            setShow(false);
          }, 500); // Wait half a second before fading out
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 700); // Time each greeting is shown

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#111]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          // This function is called when the fade-out animation is complete
          onAnimationComplete={onAnimationComplete}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetings[index]}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};