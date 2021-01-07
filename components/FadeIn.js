import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeIn({ children }) {
  const animation = useAnimation();
  const [featured, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
        },
      });
    }
  }, [inView, animation]);

  return (
    <div ref={featured}>
      <motion.div initial={{ y: 75, opacity: 0 }} animate={animation}>
        {children}
      </motion.div>
    </div>
  );
}
