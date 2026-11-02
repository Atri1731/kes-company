

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  disabled = false,
  type = "button",
}) {
  const buttonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const x = useSpring(pointerX, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  const y = useSpring(pointerY, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  const handleMouseMove = (event) => {
    if (reduceMotion || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const moveX = event.clientX - (rect.left + rect.width / 2);
    const moveY = event.clientY - (rect.top + rect.height / 2);

    pointerX.set(moveX * 0.12);
    pointerY.set(moveY * 0.12);
  };

  const resetPosition = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const sharedProps = {
    ref: buttonRef,
    style: reduceMotion ? undefined : { x, y },
    onMouseMove: handleMouseMove,
    onMouseLeave: resetPosition,
    onBlur: resetPosition,
    onClick,
    whileHover: reduceMotion ? undefined : { scale: 1.025 },
    whileTap: reduceMotion ? undefined : { scale: 0.96 },
    className: `magnetic-button group relative inline-flex items-center justify-center gap-3 overflow-hidden ${className}`,
  };

  const content = (
    <motion.span className="magnetic-button__content relative z-10 inline-flex items-center justify-center gap-3">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...sharedProps}
      type={type}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
