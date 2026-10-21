
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
//       <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
//         {/* Official KES logo */}
//         <Link
//           to="/"
//           aria-label="KES Projects home"
//           className="flex shrink-0 items-center"
//           onClick={() => setMenuOpen(false)}
//         >
//           <img
//             src="/kes-logo.png"
//             alt="KES Projects"
//             className="h-14 w-auto max-w-[160px] object-contain"
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

//         {/* Desktop actions */}
//        <div className="flex shrink-0 items-center gap-2">
//           <button
//             type="button"
//             onClick={() => setVideoOpen(true)}
//             aria-label="Play KES Projects video"
//             className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-700 text-gray-950 transition hover:bg-red-50"
//           >
//             <Play size={15} fill="currentColor" />
//           </button>

//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 rounded-md bg-red-700 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-red-800"
//           >
//             Request Quote <ArrowUpRight size={16} />
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen((open) => !open)}
//           className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-gray-900 md:hidden"
//           aria-label={
//             menuOpen ? "Close navigation menu" : "Open navigation menu"
//           }
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile navigation */}
//       {menuOpen && (
//         <div className="border-t border-gray-200 bg-white px-5 py-5 shadow-lg md:hidden">
//           <nav className="mx-auto flex max-w-7xl flex-col">
//             {links.map((link) => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 end={link.path === "/"}
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `border-b border-gray-100 py-4 text-sm font-semibold ${
//                     isActive ? "text-red-700" : "text-gray-700"
//                   }`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}

//             <Link
//               to="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="mt-5 flex items-center justify-center gap-2 rounded-md bg-red-700 px-5 py-4 text-sm font-bold text-white"
//             >
//               Request a Quote <ArrowUpRight size={17} />
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
    `text-sm font-semibold transition-colors ${
      isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Main header row */}
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
        {/* KES logo */}
        <Link
          to="/"
          aria-label="KES Projects home"
          className="flex min-w-0 shrink items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/kes-logo.png"
            alt="KES Projects"
            className="h-14 w-auto max-w-[145px] object-contain sm:max-w-[160px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Header actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Play video button: visible on all screen sizes */}
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Play KES Projects video"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-red-700 text-gray-950 shadow-[0_0_0_3px_rgba(220,38,38,0.08)] transition hover:bg-red-50"
          >
            <Play size={19} fill="currentColor" />
          </button>

          {/* Desktop quote button */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-md bg-red-700 px-4 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-red-800 xl:inline-flex"
          >
            Request Quote <ArrowUpRight size={16} />
          </Link>

          {/* Mobile/tablet menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-900 lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile and tablet navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `mb-1 rounded-lg px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-red-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-red-700 px-5 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-800"
            >
              Request Quote <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}

      {/* Video popup */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="KES Projects introduction video"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-950 transition hover:bg-gray-200"
          >
            <X size={24} />
          </button>

          <video
            className="max-h-[85vh] w-full max-w-5xl rounded-lg bg-black"
            src={videoUrl}
            controls
            autoPlay
            playsInline
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </header>
  );
}
