

import {useEffect, useRef, useState} from "react";
import MagneticButton from "./MagneticButton";
import {motion, useReducedMotion, useInView, animate} from "motion/react";
import {Link} from "react-router-dom";
import {ArrowRight, ArrowUpRight, CheckCircle2} from "lucide-react";

const stats = [
  {value: 350, suffix: "+", label: "Projects Delivered"},
  {value: 15, suffix: "+", label: "Years Experience"},
  {value: 50, suffix: "+", label: "Expert Engineers"},
  {value: 100, suffix: "%", label: "Quality Commitment"},
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

// Animated counting number
function CountUp({value, suffix, reduceMotion}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, reduceMotion]);

  return (
    <span ref={ref} className="inline-flex tabular-nums">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay = 0) =>
    reduceMotion
      ? {duration: 0}
      : {
          duration: 0.85,
          delay,
          ease,
        };

  return (
    <section className="relative isolate w-full min-w-0 overflow-hidden bg-[#FCFAF8] text-[#292524]">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.19]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="https://kesprojects.com/videos/hero/home_bg_v_1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FCFAF8]/95 via-[#FCFAF8]/85 to-[#FCFAF8]/65" />

      {/* Decorative animated rings */}
      <motion.div
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-[#873F4B]/15 sm:h-96 sm:w-96"
        initial={reduceMotion ? false : {opacity: 0, scale: 0.7}}
        animate={
          reduceMotion
            ? {opacity: 1}
            : {
                opacity: 1,
                scale: [1, 1.04, 1],
                rotate: [0, 45, 90],
              }
        }
        transition={
          reduceMotion
            ? {duration: 0}
            : {
                opacity: entrance(0.2).duration,
                scale: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                },
              }
        }
      />

      <motion.div
        className="pointer-events-none absolute -right-8 -top-12 -z-10 h-56 w-56 rounded-full border border-[#873F4B]/15 sm:h-72 sm:w-72"
        initial={reduceMotion ? false : {opacity: 0, scale: 0.7}}
        animate={
          reduceMotion
            ? {opacity: 1}
            : {
                opacity: 1,
                scale: [1, 1.06, 1],
                rotate: [0, -45, -90],
              }
        }
        transition={
          reduceMotion
            ? {duration: 0}
            : {
                scale: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }
        }
      />

      {/* Hero content */}
      <div className="mx-auto grid min-h-0 w-full max-w-[1440px] min-w-0 grid-cols-1 items-center gap-9 px-4 py-11 min-[380px]:px-5 sm:gap-10 sm:px-8 sm:py-16 lg:min-h-[650px] lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-10 lg:px-10 lg:py-20 xl:gap-16 xl:px-12 xl:py-24">
        {/* Main content */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
              },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={reveal}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#D8CEC7] bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm min-[380px]:gap-3 min-[380px]:px-4 sm:py-2.5"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-[#873F4B]"
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.55, 1],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <span className="min-w-0 text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-[#57534E] min-[380px]:text-[10px] sm:text-xs sm:tracking-[0.18em]">
              Industrial Engineering & Construction
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={reveal}
            className="mt-5 max-w-3xl break-words text-[clamp(2.1rem,8.5vw,3rem)] font-bold leading-[1.06] tracking-[-0.045em] text-[#292524] sm:mt-6 sm:text-5xl lg:text-[clamp(3.5rem,5vw,4.25rem)] xl:text-[68px]"
          >
            Engineering
            <motion.span
              className="block"
              initial={reduceMotion ? false : {opacity: 0, x: -25}}
              animate={{opacity: 1, x: 0}}
              transition={entrance(0.35)}
            >
              Tomorrow's
            </motion.span>
            <motion.span
              className="block text-[#873F4B]"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                      clipPath: "inset(0 100% 0 0)",
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0% 0 0)",
              }}
              transition={entrance(0.55)}
            >
              Industrial Landmarks.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={reveal}
            className="mt-4 max-w-2xl text-sm leading-6 text-[#57534E] sm:mt-5 sm:text-base sm:leading-8"
          >
            Where trust is the foundation and steel is the frame. Discover
            engineering solutions built around your industrial ambitions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={reveal}
            className="mt-6 flex w-full flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8 sm:gap-4"
          >
            <MagneticButton
              to="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#873F4B] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#71323D] hover:shadow-xl min-[480px]:w-auto min-[480px]:px-6 sm:min-h-14 sm:px-7 sm:py-4"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </MagneticButton>

            <MagneticButton
  href="/projects"
  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[#873F4B] bg-white px-5 py-3.5 text-sm font-bold !text-[#873F4B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:!border-[#71323D] hover:!bg-[#473F4B] hover:!text-white hover:shadow-[0_10px_25px_rgba(135,63,75,0.22)] min-[480px]:w-auto min-[480px]:px-6 sm:min-h-14 sm:px-7 sm:py-4"
>
  <span>Explore Projects</span>

  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
  />
</MagneticButton>
          </motion.div>

          {/* Trust message */}
          <motion.div
            variants={reveal}
            className="mt-6 flex items-start gap-2 text-xs leading-5 text-[#57534E] sm:mt-8 sm:text-sm"
          >
            <CheckCircle2 size={17} className="shrink-0 text-[#873F4B]" />
            Industrial solutions tailored to your requirements
          </motion.div>
        </motion.div>

        {/* Supporting panel */}
        <motion.div
          className="block w-full min-w-0 lg:block"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 60,
                  rotateY: 12,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            rotateY: 0,
          }}
          transition={entrance(0.45)}
        >
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:ml-auto"
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -bottom-3 -left-3 -z-10 h-28 w-28 rounded-bl-3xl border-b-2 border-l-2 border-[#873F4B]/40" />

            <div className="rounded-xl border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_rgba(41,37,36,0.10)] backdrop-blur-md sm:rounded-2xl sm:p-7">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F0EF] text-[#873F4B]"
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        rotate: 12,
                        scale: 1.12,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <ArrowUpRight size={24} />
              </motion.div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
                Your Engineering Partner
              </p>

              <h2 className="mt-3 text-xl font-bold leading-snug text-[#292524] sm:mt-4 sm:text-2xl">
                Designed with precision. Built with confidence.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#57534E]">
                From pre-engineered buildings to industrial steel structures,
                explore solutions for your next project.
              </p>

              <div className="my-6 h-px bg-[#EAE5E0]" />

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 font-bold text-[#873F4B] transition-colors hover:text-[#71323D]"
              >
                Discover Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Editorial Statistics */}
      <div className="relative border-y border-[#E5DCD6] bg-white">
        <motion.div
          className="mx-auto grid w-full max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.3}}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.16,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: {opacity: 0, y: 35},
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {duration: 0.8, ease},
                },
              }}
              className={`group relative flex min-h-[170px] flex-col items-center justify-center px-2 py-9 text-center sm:min-h-[210px] sm:py-12 lg:min-h-[230px] lg:px-5 ${
                index !== 0 ? "border-l border-[#E5DCD6]" : ""
              }`}
            >
              {/* Animated Number */}
              <motion.div
                className="whitespace-nowrap text-[clamp(2.3rem,3.8vw,4rem)] font-bold leading-none tracking-[-0.06em] text-[#873F4B]"
                initial={reduceMotion ? false : {opacity: 0, scale: 0.85}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease,
                }}
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  reduceMotion={reduceMotion}
                />
              </motion.div>

              {/* Animated Label */}
              <motion.p
                className="mt-5 text-[10px] font-normal uppercase tracking-[0.12em] text-[#292524] sm:text-xs sm:tracking-[0.17em] lg:text-sm"
                initial={reduceMotion ? false : {opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.12,
                  ease,
                }}
              >
                {stat.label}
              </motion.p>

              {/* Animated Burgundy Underline */}
              <motion.div
                className="absolute bottom-0 left-1/2 h-[3px] w-12 -translate-x-1/2 bg-[#873F4B] origin-center"
                initial={{scaleX: 0}}
                whileInView={{scaleX: 1}}
                viewport={{once: true}}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.12,
                  ease,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
