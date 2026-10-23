


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



import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Play, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

const videoUrl =
  "https://kesprojects.com/videos/hero/home_bg_v_1.mp4";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-[#873F4B]"
        : "text-[#44403C] hover:text-[#873F4B]"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#EAE5E0] bg-white/95 shadow-[0_2px_16px_rgba(41,37,36,0.03)] backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-10 xl:px-14">
          {/* Company logo */}
          <Link
            to="/"
            aria-label="KES Projects home"
            className="flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/kes-logo.png"
              alt="KES Projects"
              className="h-12 w-auto max-w-[135px] object-contain sm:h-14 sm:max-w-[160px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
              >
                {({ isActive }) => (
                  <span className="relative block py-1">
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#873F4B] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Introduction video */}
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play KES Projects introduction video"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8CEC7] bg-white text-[#873F4B] transition duration-300 hover:border-[#873F4B] hover:bg-[#F8F3F2] sm:h-11 sm:w-11"
            >
              <Play size={16} fill="currentColor" />
            </button>

            {/* Desktop quote button */}
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-md bg-[#873F4B] px-4 py-3 text-xs font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#71323D] sm:px-5 xl:inline-flex"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile and tablet menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#EAE5E0] text-[#292524] transition hover:bg-[#F5F6F4] lg:hidden"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile and tablet navigation */}
        {menuOpen && (
          <div className="border-t border-[#EAE5E0] bg-white px-4 py-5 shadow-lg lg:hidden sm:px-8">
            <nav className="mx-auto flex max-w-7xl flex-col">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `mb-1 flex items-center justify-between rounded-lg px-4 py-3.5 text-sm transition-colors duration-200 ${
                      isActive
                        ? "bg-[#F5F0EF] font-semibold text-[#873F4B]"
                        : "text-[#44403C] hover:bg-[#F5F6F4] hover:text-[#873F4B]"
                    }`
                  }
                >
                  {link.label}
                  <ArrowUpRight size={15} className="opacity-50" />
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#873F4B] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#71323D]"
              >
                Let's Talk About Your Project
                <ArrowUpRight size={17} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Introduction video popup */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171514]/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="KES Projects introduction video"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#292524] transition hover:bg-[#F5F6F4] sm:right-6 sm:top-6"
          >
            <X size={23} />
          </button>

          <video
            className="max-h-[85vh] w-full max-w-5xl rounded-xl bg-black shadow-2xl"
            src={videoUrl}
            controls
            autoPlay
            playsInline
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
