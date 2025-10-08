import { BrowserRouter as Router } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Employment from "./components/Employment";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Solopreneur from "./components/Solopreneur";

function App() {
  return (
    <Router>
      <motion.div
        className="min-h-screen bg-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background particles */}
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Hero />
            <Employment />
            <Stack />
            <Projects />
            <Education />
            <Solopreneur />
          </motion.main>
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default App;
