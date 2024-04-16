'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import SocialLinks from "../SocialLinks";
import Navlinks from "./Navlinks";
import { Sidebar } from "./Sidebar";
// import { Sidebar } from "lucide-react";

type Props = {}

const Navbar = (props: Props) => {

    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true);
    }, []);
  return (
    <div className={`dark:bg-[#1F2937] w-full`}>
    <div className={`max-w-6xl flex justify-between  items-center  mx-auto px-4 py-10 md:py-20 `}>
        <div className="flex flex-col">
            <h1 className="text-xl font-bold">Vaidik Singh Nirwan</h1>
            <p className="text-sm text-gray-400">Next Js Developer</p>
        </div>
        <div className="hidden md:flex gap-4 font-semibold text-gray-300 ">
            <Navlinks/>
        </div>
        <div className="flex  md:flex-row justify-between items-center  gap-2">
            <div className="hidden md:flex gap-2 ">
                <SocialLinks/>
            </div>
            <div className="flex md:hidden relative z-50">
                <Sidebar/>
            </div>
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 h-10 p-3 rounded focus:outline-none md:flex hidden"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {mounted && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                    {theme === "dark" ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                    ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                    )}
                </svg>
                )}
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar