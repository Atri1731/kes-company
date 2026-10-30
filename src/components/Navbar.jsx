


// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, Play, ArrowUpRight } from "lucide-react";

// const links = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Projects", path: "/projects" },
//   { label: "Clients", path: "/clients" },
//   { label: "Contact", path: "/contact" },
// ];

// const videoUrl =
//   "https://kesprojects.com/videos/hero/home_bg_v_1.mp4";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [videoOpen, setVideoOpen] = useState(false);

//   const linkClass = ({ isActive }) =>
//     `text-sm font-semibold transition-colors ${
//       isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
//     }`;

//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
//       {/* Main header row */}
//       <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
//         {/* KES logo */}
//         <Link
//           to="/"
//           aria-label="KES Projects home"
//           className="flex min-w-0 shrink items-center"
//           onClick={() => setMenuOpen(false)}
//         >
//           <img
//             src="/kes-logo.png"
//             alt="KES Projects"
//             className="h-14 w-auto max-w-[145px] object-contain sm:max-w-[160px]"
//           />
//         </Link>

//         {/* Desktop navigation */}
//         <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
//           {links.map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               end={link.path === "/"}
//               className={linkClass}
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Header actions */}
//         <div className="flex shrink-0 items-center gap-2 sm:gap-3">
//           {/* Play video button: visible on all screen sizes */}
//           <button
//             type="button"
//             onClick={() => setVideoOpen(true)}
//             aria-label="Play KES Projects video"
//             className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-red-700 text-gray-950 shadow-[0_0_0_3px_rgba(220,38,38,0.08)] transition hover:bg-red-50"
//           >
//             <Play size={19} fill="currentColor" />
//           </button>

//           {/* Desktop quote button */}
//           <Link
//             to="/contact"
//             className="hidden items-center gap-2 rounded-md bg-red-700 px-4 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-red-800 xl:inline-flex"
//           >
//             Request Quote <ArrowUpRight size={16} />
//           </Link>

//           {/* Mobile/tablet menu button */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen((open) => !open)}
//             className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-900 lg:hidden"
//             aria-label={
//               menuOpen ? "Close navigation menu" : "Open navigation menu"
//             }
//             aria-expanded={menuOpen}
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile and tablet navigation */}
//       {menuOpen && (
//         <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg lg:hidden">
//           <nav className="mx-auto flex max-w-7xl flex-col">
//             {links.map((link) => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 end={link.path === "/"}
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `mb-1 rounded-lg px-4 py-3.5 text-sm font-medium transition-colors ${
//                     isActive
//                       ? "bg-red-50 text-red-700"
//                       : "text-gray-700 hover:bg-gray-50 hover:text-red-700"
//                   }`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}

//             <Link
//               to="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="mt-3 flex items-center justify-center gap-2 rounded-md bg-red-700 px-5 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-800"
//             >
//               Request Quote <ArrowUpRight size={17} />
//             </Link>
//           </nav>
//         </div>
//       )}

//       {/* Video popup */}
//       {videoOpen && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-label="KES Projects introduction video"
//           onClick={() => setVideoOpen(false)}
//         >
//           <button
//             type="button"
//             onClick={() => setVideoOpen(false)}
//             aria-label="Close video"
//             className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-950 transition hover:bg-gray-200"
//           >
//             <X size={24} />
//           </button>

//           <video
//             className="max-h-[85vh] w-full max-w-5xl rounded-lg bg-black"
//             src={videoUrl}
//             controls
//             autoPlay
//             playsInline
//             onClick={(event) => event.stopPropagation()}
//           />
//         </div>
//       )}
//     </header>
//   );
// }


// import MagneticButton from "./MagneticButton";
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, Play, ArrowUpRight } from "lucide-react";

// const links = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Projects", path: "/projects" },
//   { label: "Clients", path: "/clients" },
//   { label: "Contact", path: "/contact" },
// ];

// const videoUrl =
//   "https://kesprojects.com/videos/hero/home_bg_v_1.mp4";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [videoOpen, setVideoOpen] = useState(false);

//   const linkClass = ({ isActive }) =>
//     `relative py-2 text-sm font-medium transition-colors duration-300 ${
//       isActive
//         ? "text-[#873F4B]"
//         : "text-[#44403C] hover:text-[#873F4B]"
//     }`;

//   return (
//     <>
//       <header className="sticky top-0 z-50 border-b border-[#EAE5E0] bg-white/95 shadow-[0_2px_16px_rgba(41,37,36,0.03)] backdrop-blur-xl">
//         <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-10 xl:px-14">
//           {/* Company logo */}
//           <Link
//             to="/"
//             aria-label="KES Projects home"
//             className="flex shrink-0 items-center"
//             onClick={() => setMenuOpen(false)}
//           >
//             <img
//               src="/kes-logo.png"
//               alt="KES Projects"
//               className="h-12 w-auto max-w-[135px] object-contain sm:h-14 sm:max-w-[160px]"
//             />
//           </Link>

//           {/* Desktop navigation */}
//           <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
//             {links.map((link) => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 end={link.path === "/"}
//                 className={linkClass}
//               >
//                 {({ isActive }) => (
//                   <span className="relative block py-1">
//                     {link.label}
//                     <span
//                       className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#873F4B] transition-all duration-300 ${
//                         isActive
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }`}
//                     />
//                   </span>
//                 )}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Header actions */}
//           <div className="flex shrink-0 items-center gap-2 sm:gap-3">
//             {/* Introduction video */}
//             <button
//               type="button"
//               onClick={() => setVideoOpen(true)}
//               aria-label="Play KES Projects introduction video"
//               className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8CEC7] bg-white text-[#873F4B] transition duration-300 hover:border-[#873F4B] hover:bg-[#F8F3F2] sm:h-11 sm:w-11"
//             >
//               <Play size={16} fill="currentColor" />
//             </button>

//             {/* Desktop quote button */}
          
// <MagneticButton
//   href="/contact"
//   className="hidden items-center gap-2 rounded-md bg-[#873F4B] px-4 py-3 text-xs font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#71323D] sm:px-5 xl:inline-flex"
// >
//   Let's Talk
//   <ArrowUpRight size={16} />
// </MagneticButton>


//             {/* Mobile and tablet menu button */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen((open) => !open)}
//               className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#EAE5E0] text-[#292524] transition hover:bg-[#F5F6F4] lg:hidden"
//               aria-label={
//                 menuOpen ? "Close navigation menu" : "Open navigation menu"
//               }
//               aria-expanded={menuOpen}
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile and tablet navigation */}
//         {menuOpen && (
//           <div className="border-t border-[#EAE5E0] bg-white px-4 py-5 shadow-lg lg:hidden sm:px-8">
//             <nav className="mx-auto flex max-w-7xl flex-col">
//               {links.map((link) => (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   end={link.path === "/"}
//                   onClick={() => setMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `mb-1 flex items-center justify-between rounded-lg px-4 py-3.5 text-sm transition-colors duration-200 ${
//                       isActive
//                         ? "bg-[#F5F0EF] font-semibold text-[#873F4B]"
//                         : "text-[#44403C] hover:bg-[#F5F6F4] hover:text-[#873F4B]"
//                     }`
//                   }
//                 >
//                   {link.label}
//                   <ArrowUpRight size={15} className="opacity-50" />
//                 </NavLink>
//               ))}

//               <Link
//                 to="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#873F4B] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#71323D]"
//               >
//                 Let's Talk About Your Project
//                 <ArrowUpRight size={17} />
//               </Link>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Introduction video popup */}
//       {videoOpen && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171514]/90 p-4 backdrop-blur-sm"
//           role="dialog"
//           aria-modal="true"
//           aria-label="KES Projects introduction video"
//           onClick={() => setVideoOpen(false)}
//         >
//           <button
//             type="button"
//             onClick={() => setVideoOpen(false)}
//             aria-label="Close video"
//             className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#292524] transition hover:bg-[#F5F6F4] sm:right-6 sm:top-6"
//           >
//             <X size={23} />
//           </button>

//           <video
//             className="max-h-[85vh] w-full max-w-5xl rounded-xl bg-black shadow-2xl"
//             src={videoUrl}
//             controls
//             autoPlay
//             playsInline
//             onClick={(event) => event.stopPropagation()}
//           />
//         </div>
//       )}
//     </>
//   );
// }




import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Play, ArrowUpRight, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

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
  hidden: { opacity: 0, y: -12, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    height: 0,
    transition: { duration: 0.22, ease: "easeInOut" },
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
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-[#E7DED9] bg-[#FCFAF8]/95 shadow-[0_8px_30px_rgba(41,37,36,0.07)]"
            : "border-[#EAE5E0] bg-white/95 shadow-[0_2px_16px_rgba(41,37,36,0.025)]"
        }`}
      >
        {/* Slim brand accent */}
        <div className="h-[3px] bg-gradient-to-r from-[#873F4B] via-[#C99AA2] to-transparent" />

        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-8 lg:px-12 ${
            scrolled ? "h-[66px]" : "h-[78px]"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="KES Projects home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center"
          >
            <img
              src="/kes-logo.png"
              alt="KES Projects"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${
                scrolled ? "h-10 max-w-[125px] sm:h-11" : "h-12 max-w-[140px] sm:h-14 sm:max-w-[160px]"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className="group relative py-3 text-[13px] font-semibold tracking-[0.015em] text-[#57534E] transition-colors duration-300 hover:text-[#873F4B]"
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
                      transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
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

          {/* Header actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play KES Projects introduction video"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CEC7] bg-white text-[#873F4B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#873F4B] hover:bg-[#873F4B] hover:text-white hover:shadow-[0_8px_20px_rgba(135,63,75,0.18)] sm:h-11 sm:w-11"
            >
              <Play size={15} fill="currentColor" className="ml-0.5 transition-transform group-hover:scale-110" />
            </button>

            <MagneticButton
              href="/contact"
              className="group hidden items-center gap-3 bg-[#873F4B] px-5 py-3 text-xs font-bold tracking-wide text-white shadow-[0_5px_16px_rgba(135,63,75,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#71323D] hover:shadow-[0_9px_22px_rgba(135,63,75,0.24)] xl:inline-flex"
            >
              Let's Talk
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center border border-[#E7DED9] bg-white text-[#292524] transition hover:border-[#873F4B] hover:text-[#873F4B] lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Menu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile / tablet navigation */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden border-t border-[#EAE5E0] bg-[#FCFAF8] lg:hidden"
            >
              <nav className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-8" aria-label="Mobile navigation">
                <div className="grid grid-cols-2 gap-2">
                  {links.map((link, index) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `group flex min-h-[58px] items-center justify-between border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "border-[#873F4B]/25 bg-[#F0E0E3]/65 text-[#873F4B]"
                            : "border-[#EAE5E0] bg-white text-[#57534E] hover:border-[#C99AA2] hover:text-[#873F4B]"
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </NavLink>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="group mt-3 flex items-center justify-between bg-[#873F4B] px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-[#71323D]"
                >
                  Let's Talk About Your Project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#A8A09A]">
                  KES Projects · Your Engineering Partner
                </p>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Introduction video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171514]/90 p-4 backdrop-blur-md"
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
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-[#292524] transition hover:bg-[#F0E0E3] sm:right-6 sm:top-6"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={22} />
            </motion.button>

            <motion.video
              className="max-h-[85vh] w-full max-w-5xl rounded-sm bg-black shadow-2xl"
              src={videoUrl}
              controls
              autoPlay
              playsInline
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

