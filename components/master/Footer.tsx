import React from "react";
import Brand from "./Brand";
import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <footer id="socials" className="drop-shadow-xl border">
            <div className="flex flex-col p-4 gap-4">
                <div className="flex items-center container text-sm gap-2">
                    <p>Copyright &copy; All rights reserved</p>
                    <Separator orientation="vertical" className="w-[1px] h-6" />
                    <p>mangadi3859</p>
                </div>
            </div>
        </footer>
    );
}
