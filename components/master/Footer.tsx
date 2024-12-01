import React from "react";
import Brand from "./Brand";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="socials" className="drop-shadow-xl border mt-auto bg-white">
            <div className="flex flex-col p-4 gap-4 container">
                <div className="flex justify-between phone:flex-col text-sm gap-2">
                    <div className="flex flex-col gap-2 max-w-[16rem]">
                        <Brand light className="h-14 w-14 p-1 aspect-square rounded-full bg-black" />
                        <p className="text-black/65">Become the world&apos;s developer, inspire innovation, and create solutions that make a difference.</p>
                    </div>

                    <div className="flex phone:justify-normal gap-12 justify-between">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold">Quick Links</h3>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="/#home">
                                Home
                            </Link>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="/#about">
                                About
                            </Link>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="/#projects">
                                Projects
                            </Link>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="/#contact">
                                Contact
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold">Socials</h3>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="https://www.linkedin.com/in/komang-adi-wirawan-b844802b5/">
                                Linkedin
                            </Link>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="https://github.com/totallynotisla">
                                Github
                            </Link>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="https://www.instagram.com/mangadi3859/">
                                Instagram
                            </Link>
                            <Link target="_blank" className="text-sm text-black/65 hover:underline" href="https://discordapp.com/users/678444178329305121">
                                Discord
                            </Link>
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="flex items-center text-sm gap-2 phone:flex-col">
                    <p>Copyright &copy; All rights reserved</p>
                    <Separator orientation="vertical" className="w-[1px] h-6 phone:hidden" />
                    <p>mangadi3859</p>
                </div>
            </div>
        </footer>
    );
}
