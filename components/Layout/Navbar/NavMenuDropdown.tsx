import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navButtons, navLinks } from "./navLinks";

function NavMenuDropdown() {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  return (
    <ul className="flex flex-col gap-2 w-full pt-5 pb-12 px-4 ">
      {navLinks.map((navLink) => (
        <li key={navLink.name}>
          <Link href={navLink.link}>
            <p
              className={cn(
                "px-10 py-3 rounded-lg active:bg-white/10 text-lg text-white font-medium",
                isActive(navLink.link) && "text-custom-yellow bg-white/20"
              )}
            >
              {navLink.name}
            </p>
          </Link>
        </li>
      ))}

      {navButtons.map((navButton) => (
        <li key={navButton.name}>
          <Link href={navButton.link}>
            <button
              type="button"
              aria-label={navButton.name}
              className={cn(
                "ml-4 my-2 px-12 py-4 border-2 border-custom-gray/20 rounded-full text-lg font-medium text-white active:bg-custom-yellow active:text-tint-blue transition-colors duration-200",
                isActive(navButton.link) &&
                  "text-custom-yellow border-custom-yellow bg-white/20"
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

export default NavMenuDropdown;
