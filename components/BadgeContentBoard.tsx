import React from "react";
import CheckBadge from "./Icons/CheckBadge";
import Link from "next/link";

function BadgeContentBoard() {
  return (
    <Link
      href="https://contentboard.vercel.app"
      target="_blank"
      className="flex gap-1 items-center px-2 py-1 rounded-full text-sm font-medium border border-gray-300 text-white bg-[#F97316]"
    >
      <span>
        <CheckBadge />
      </span>
      <span>Powered by</span>
      <span className="font-bold">ContentBoard</span>
    </Link>
  );
}

export default BadgeContentBoard;
