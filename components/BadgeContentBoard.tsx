import React from "react";
import CheckBadge from "./Icons/CheckBadge";
import Link from "next/link";

function BadgeContentBoard() {
  return (
    // <div className="animate-background inline-block rounded-full bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
    <Link
      href="https://contentboard.vercel.app"
      target="_blank"
      className="flex gap-1 items-center px-2 py-1 rounded-full text-sm font-medium text-white animate-background bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%]"
    >
      <span>
        <CheckBadge />
      </span>
      <span>Powered by</span>
      <span className="font-bold">ContentBoard</span>
    </Link>
    // </div>
  );
}

export default BadgeContentBoard;
