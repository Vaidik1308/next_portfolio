'use client'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Navlinks from "./Navlinks"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Sidebar = () => {
    const [sheetOpen,setSheetOpen] = useState(false)
    const pathname = usePathname()
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger  asChild>
        <Button variant="secondary">
            <AlignJustify/> 
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold">Vaidik Singh Nirwan</h1>
                <p className="text-sm text-gray-400">Next Js Developer</p>
            </div>
        </SheetHeader>
        <div className=" py-4 flex flex-col gap-10 my-4">
        <SheetClose asChild>
      <Link className={`${pathname === "/" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/"}>Home</Link>
    </SheetClose>
    <SheetClose asChild>
      <Link className={`${pathname === "/about-me" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/about-me"}>About</Link>
    </SheetClose>
    <SheetClose asChild>
      <Link className={`${pathname === "/projects" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/projects"}>Projects</Link>
    </SheetClose>
    <SheetClose asChild>
      <Link className={`${pathname === "/experience" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/experience"}>Experience</Link>
    </SheetClose>
    <SheetClose asChild>
      <Link className={`${pathname === "/contact-me" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/contact-me"}>Contact</Link>
    </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
