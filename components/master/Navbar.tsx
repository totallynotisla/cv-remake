import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Brand from "./Brand";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <>
            <nav className="z-[100] fixed top-0 left-0 right-0 fcode bg-white">
                <div className="flex py-4 container justify-between items-center">
                    <Brand className="h-14" />

                    <NavigationMenu>
                        <NavigationMenuList className="gap-4 font-semibold">
                            <NavigationMenuItem>
                                <Link className="hover:underline px-4 py-2" href="#about">
                                    About Me
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className="hover:underline px-4 py-2" href="#projects">
                                    Projects
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className="hover:underline px-4 py-2" href="#socials">
                                    Socials
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button variant="default" className="bg-black rounded-full text-white hover:bg-gray-800 transition">
                        Contact Me
                    </Button>
                </div>
            </nav>
        </>
    );
}
