"use client";

import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Brand from "./Brand";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetFooter, SheetContent } from "@/components/ui/sheet";
import { Logs } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleBtn() {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <>
            <nav className="z-[100] fixed top-0 left-0 right-0 fcode bg-white">
                <div className="flex py-4 container justify-between items-center">
                    <Brand className="h-14" />

                    <NavigationMenu className="phone:hidden">
                        <NavigationMenuList className="gap-4 font-semibold">
                            <NavigationMenuItem>
                                <Link className="hover:underline px-4 py-2" href="/#about">
                                    About Me
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className="hover:underline px-4 py-2" href="/#projects">
                                    Projects
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className="hover:underline px-4 py-2" href="/#socials">
                                    Socials
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button variant="default" className="bg-black rounded-full text-white hover:bg-gray-800 transition phone:hidden">
                        <Link href="/#contact">Contact Me</Link>
                    </Button>

                    <button onClick={handleBtn} className="bg-0 hidden phone:block p-0 border-0 rounded-none shadow-none hover:opacity-65 transition">
                        <Logs className="size-8 text-black block" />
                    </button>
                </div>
            </nav>

            <Sheet onOpenChange={setIsOpen} open={isOpen} defaultOpen={false}>
                <SheetContent side={"right"} className="z-[101]">
                    <div className="flex flex-col h-full pt-6 gap-4">
                        <Button variant="default" className="bg-black rounded-0 text-white hover:bg-gray-800 transition">
                            <Link className="" href="/#about">
                                About Me
                            </Link>
                        </Button>

                        <Button variant="default" className="bg-black rounded-0 text-white hover:bg-gray-800 transition">
                            <Link className="" href="/#projects">
                                Projects
                            </Link>
                        </Button>

                        <Button variant="default" className="bg-black rounded-0 text-white hover:bg-gray-800 transition">
                            <Link className="" href="/#socials">
                                Socials
                            </Link>
                        </Button>

                        <Separator className="mt-auto" />

                        <SheetFooter>
                            <Button variant="default" className="bg-black rounded-0 text-white hover:bg-gray-800 transition">
                                <Link href="/#contact">Contact Me</Link>
                            </Button>
                        </SheetFooter>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
