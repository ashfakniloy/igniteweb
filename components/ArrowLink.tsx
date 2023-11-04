import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "./Icons/ArrowIcon";

function ArrowLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium inline-flex items-center gap-3 lg:gap-4 group",
        className
      )}
    >
      <span>{children}</span>
      <span className="group-hover:animate-bounce-right">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export default ArrowLink;
