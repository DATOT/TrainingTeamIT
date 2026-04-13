import { useState } from "react";
import { motion } from "framer-motion";

export default function FadeExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-32 h-32 bg-blue-400 mt-2"
        >
          Fade box
        </motion.div>
      )}
    </div>
  );
}
