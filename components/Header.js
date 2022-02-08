import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[rgb(70,130,180)]">
      <div className="max-w-5xl w-11/12 mx-auto py-4 text-white mb-5">
        <Link href="/">
          <h2 className="text-2xl font-semibold">Dev Blog</h2>
        </Link>
      </div>
    </header>
  );
}
