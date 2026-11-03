

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Play, ArrowUpRight, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

const videoUrl = "https://kesprojects.com/videos/hero/home_bg_v_1.mp4";

const menuVariants = {
  hidden: { opacity: 0, y: -8, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const handleBreakpoint = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    desktopQuery.addEventListener?.("change", handleBreakpoint);
    return () => desktopQuery.removeEventListener?.("change", handleBreakpoint);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setVideoOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-[#E7DED9] bg-[#FCFAF8]/95 shadow-[0_8px_30px_rgba(41,37,36,0.07)]"
            : "border-[#EAE5E0] bg-white/95 shadow-[0_2px_16px_rgba(41,37,36,0.025)]"
        }`}
      >
        <div className="h-[3px] bg-gradient-to-r from-[#873F4B] via-[#C99AA2] to-transparent" />

        <div
          className={`mx-auto grid w-full max-w-[1800px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 transition-all duration-300 min-[380px]:px-4 sm:gap-4 sm:px-6 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:px-8 2xl:px-12 ${
            scrolled ? "h-[64px] sm:h-[68px]" : "h-[70px] sm:h-[78px]"
          }`}
        >
          <Link
            to="/"
            aria-label="KES Projects home"
            onClick={closeMenu}
            className="group flex min-w-0 items-center justify-self-start"
          >
            <img
              src="/kes-logo.png"
              alt="KES Projects"
              className={`h-auto w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${
                scrolled
                  ? "max-h-9 max-w-[94px] min-[380px]:max-w-[105px] sm:max-h-11 sm:max-w-[125px]"
                  : "max-h-10 max-w-[100px] min-[380px]:max-w-[112px] sm:max-h-14 sm:max-w-[150px] 2xl:max-w-[160px]"
              }`}
            />
          </Link>

          <nav
            className="hidden items-center justify-center gap-4 justify-self-center xl:flex 2xl:gap-7"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className="group relative whitespace-nowrap py-3 text-xs font-semibold tracking-[0.015em] text-[#57534E] transition-colors duration-300 hover:text-[#873F4B] 2xl:text-[13px]"
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-[#873F4B]" : ""}>
                      {link.label}
                    </span>
                    <motion.span
                      className="absolute -bottom-[2px] left-0 h-[2px] origin-left rounded-full bg-[#873F4B]"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.28,
                        ease: "easeOut",
                      }}
                      style={{ width: "100%" }}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="kes-nav-dot"
                        className="absolute -right-2 top-[9px] h-1 w-1 rounded-full bg-[#873F4B]"
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex min-w-0 items-center justify-self-end gap-1.5 min-[380px]:gap-2 sm:gap-3 xl:col-start-3 xl:justify-self-end">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play KES Projects introduction video"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8CEC7] bg-white text-[#873F4B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#873F4B] hover:bg-[#873F4B] hover:text-white hover:shadow-[0_8px_20px_rgba(135,63,75,0.18)] min-[430px]:flex sm:h-11 sm:w-11"
            >
              <Play size={15} fill="currentColor" className="ml-0.5" />
            </button>

            <Link
              to="/contact"
              onClick={closeMenu}
             className="hidden sm:inline-flex group min-h-11 shrink-0 items-center gap-2 bg-[#873F4B] px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_5px_16px_rgba(135,63,75,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#71323D] hover:shadow-[0_9px_22px_rgba(135,63,75,0.24)]"
            >
              Let's Talk
              <ArrowUpRight size={14} className="sm:h-4 sm:w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#E7DED9] bg-white text-[#292524] transition hover:border-[#873F4B] hover:text-[#873F4B] sm:h-11 sm:w-11 xl:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="kes-mobile-navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  >
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  >
                    <Menu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="kes-mobile-navigation"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-[#EAE5E0] bg-[#FCFAF8] shadow-[0_16px_30px_rgba(41,37,36,0.10)] xl:hidden"
            >
              <nav
                className="mx-auto w-full max-w-7xl px-3 pb-5 pt-4 min-[380px]:px-4 sm:px-6 sm:pb-6"
                aria-label="Mobile navigation"
              >
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {links.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `group flex min-h-[50px] min-w-0 items-center justify-between gap-2 border px-3 py-3 text-xs font-semibold transition-all duration-200 min-[380px]:px-4 sm:min-h-[58px] sm:text-sm ${
                          isActive
                            ? "border-[#873F4B]/25 bg-[#F0E0E3]/65 text-[#873F4B]"
                            : "border-[#EAE5E0] bg-white text-[#57534E] hover:border-[#C99AA2] hover:text-[#873F4B]"
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} className="shrink-0 opacity-50" />
                    </NavLink>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="group mt-3 flex min-h-12 items-center justify-between gap-3 bg-[#873F4B] px-4 py-3.5 text-xs font-bold text-white transition-colors hover:bg-[#71323D] sm:px-5 sm:text-sm"
                >
                  <span>Let's Talk About Your Project</span>
                  <ArrowRight size={18} className="shrink-0" />
                </Link>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A8A09A] sm:tracking-[0.22em]">
                  KES Projects · Your Engineering Partner
                </p>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171514]/90 p-3 backdrop-blur-md sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-label="KES Projects introduction video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-[#292524] transition hover:bg-[#F0E0E3] sm:right-6 sm:top-6 sm:h-11 sm:w-11"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={22} />
            </motion.button>

            <motion.video
              className="max-h-[80dvh] w-full max-w-5xl rounded-sm bg-black shadow-2xl sm:max-h-[85dvh]"
              src={videoUrl}
              controls
              autoPlay
              playsInline
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
