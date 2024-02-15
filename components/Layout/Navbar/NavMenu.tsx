import { useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navButtons, navLinks } from "./navLinks";
import { motion } from "framer-motion";

function NavMenu({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname();
  const uId = useId();

  // const isActive = (path: string) => pathname === path;

  const isActive = (path: string) => {
    if (path === "/" && pathname === path) {
      return true;
    }

    if (
      path !== "/" &&
      (pathname === path || pathname.startsWith(`${path}/`))
    ) {
      return true;
    }
  };

  return (
    <ul className="flex items-center gap-8">
      {navLinks.map((navLink) => (
        <li
          key={navLink.name}
          className={cn(
            "text-neutral-300 text-sm font-medium",
            isActive(navLink.link) && "text-custom-yellow"
          )}
        >
          <Link href={navLink.link}>{navLink.name}</Link>

          <div className="relative">
            {isActive(navLink.link) &&
              (!isScrolled ? (
                <motion.div
                  layoutId={uId}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="absolute w-full border-b-2 border-custom-yellow" />
                </motion.div>
              ) : (
                <div className="absolute w-full border-b-2 border-custom-yellow" />
              ))}
          </div>
        </li>
      ))}

      {navButtons.map((navButton) => (
        <li key={navButton.name}>
          <Link href={navButton.link}>
            <button
              type="button"
              aria-label={navButton.name}
              className={cn(
                "text-neutral-300 text-sm font-medium px-12 py-4 border border-custom-gray/20 rounded-full hover:bg-custom-yellow hover:text-tint-blue transition-all duration-300 origin-right",
                isActive(navButton.link) &&
                  "text-custom-yellow border-custom-yellow",
                isScrolled ? "scale-90" : "scale-100"
              )}
            >
              {navButton.name}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
