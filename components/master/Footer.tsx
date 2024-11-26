import React from "react";
import Brand from "./Brand";
import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <footer id="socials" className="rounded-[3rem_3rem_0_0] drop-shadow-xl border">
            <div className="flex flex-col p-4 gap-4">
                <div className="flex space-between container">
                    <Brand light />
                </div>
                <Separator />
                <div className="flex items-center container">
                    <p className="text-sm">Copyright &copy; All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
