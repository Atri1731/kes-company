
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
      setIsVisible(true);

      const target = event.target;
      setIsHovering(
        target instanceof Element &&
          !!target.closest(
            "a, button, [role='button'], .cursor-hover"
          )
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-black md:block"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        x: { duration: 0.08, ease: "linear" },
        y: { duration: 0.08, ease: "linear" },
        scale: { duration: 0.2, ease: "easeOut" },
        opacity: { duration: 0.15 },
      }}
      style={{
        width: 12,
        height: 12,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
