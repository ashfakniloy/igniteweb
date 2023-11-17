"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import ButtonHamburger from "./ButtonHamburger";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import NavMenuDropdown from "./NavMenuDropdown";
import AnimateHeight from "@/components/Animations/AnimateHeight";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const isScrolled = useScroll(16);
  const isScrolled2 = useScroll(102);

  const pathname = usePathname();

  useEffect(() => {
    setShowNav(false);
  }, [pathname]);

  return (
    <>
      <div className="absolute top-0 z-0 h-[92px] w-full bg-tint-blue backdrop-blur-sm" />

      <div
        className={cn(
          "sticky mt-4 top-0 bg-tint-blue backdrop-blur-sm z-20 transition-colors duration-300",
          isScrolled2 && "bg-opacity-80",
          showNav && "bg-opacity-100"
        )}
      >
        <div className={cn("flex justify-between items-center h-[60px]")}>
          <div className="container flex justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>

            <nav className="hidden lg:block">
              <NavMenu isScrolled={isScrolled} />
            </nav>

            <span className="lg:hidden">
              <ButtonHamburger showNav={showNav} setShowNav={setShowNav} />
            </span>
          </div>
        </div>

        <nav className={`lg:hidden  fixed w-full bg-tint-blue`}>
          <AnimateHeight open={showNav}>
            <NavMenuDropdown />
          </AnimateHeight>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import useScroll from "@/hooks/useScroll";
// import { cn } from "@/lib/utils";
// import ButtonHamburger from "./ButtonHamburger";
// import Logo from "../Logo";
// import NavMenu from "./NavMenu";
// import NavMenuDropdown from "./NavMenuDropdown";
// import AnimateHeight from "@/components/Animations/AnimateHeight";

// function Navbar() {
//   const [showNav, setShowNav] = useState(false);
//   const isScrolled = useScroll(32);

//   const pathname = usePathname();

//   useEffect(() => {
//     setShowNav(false);
//   }, [pathname]);

//   return (
//     <div
//       className={cn(
//         "fixed w-full bg-tint-blue bg-opacity-80 backdrop-blur-sm z-20 transition-colors duration-300",
//         showNav && "bg-opacity-100"
//       )}
//     >
//       <div
//         className={cn(
//           "flex justify-between items-center transition-[height] duration-300",
//           isScrolled ? "h-[60px]" : "h-[92px]"
//         )}
//       >
//         <div className="container flex justify-between items-center">
//           <Link href="/">
//             <Logo />
//           </Link>

//           <nav className="hidden lg:block">
//             <NavMenu isScrolled={isScrolled} />
//           </nav>

//           <span className="lg:hidden">
//             <ButtonHamburger showNav={showNav} setShowNav={setShowNav} />
//           </span>
//         </div>
//       </div>

//       <nav className="lg:hidden">
//         <AnimateHeight open={showNav}>
//           <NavMenuDropdown />
//         </AnimateHeight>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
