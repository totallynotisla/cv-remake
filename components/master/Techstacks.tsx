"use client";
import React from "react";

import {
    SiJavascript,
    SiJavascriptHex,
    SiTypescript,
    SiTypescriptHex,
    SiPhpHex,
    SiPhp,
    SiNodedotjs,
    SiNodedotjsHex,
    SiMysql,
    SiMysqlHex,
    SiMongodb,
    SiMongodbHex,
    SiPython,
    SiPythonHex,
    SiRenpy,
    SiRenpyHex,
    SiNextdotjs,
    SiNextdotjsHex,
    SiReactHex,
    SiReact,
    SiChromewebstore,
    SiChromewebstoreHex,
    SiWebpack,
    SiWebpackHex,
    SiFigma,
    SiFigmaHex,
    SiPrisma,
    SiPrismaHex,
    SiExpress,
    SiExpressHex,
    SiHtml5,
    SiHtml5Hex,
    SiCss3,
    SiCss3Hex,
    SiTailwindcss,
    SiTailwindcssHex,
    SiSass,
    SiSassHex,
    SiFfmpeg,
    SiFfmpegHex,
} from "@icons-pack/react-simple-icons";
import TechItem from "./TechItem";

function Techstacks() {
    return (
        <>
            <TechItem title="Javascript">
                <SiJavascript title="" className="size-10 bg-black" color={SiJavascriptHex} />
            </TechItem>
            <TechItem title="FFMPEG">
                <SiFfmpeg title="" className="size-10" color={SiFfmpegHex} />
            </TechItem>
            <TechItem title="HTML">
                <SiHtml5 title="" className="size-10" color={SiHtml5Hex} />
            </TechItem>
            <TechItem title="CSS">
                <SiCss3 title="" className="size-10" color={SiCss3Hex} />
            </TechItem>
            <TechItem title="Tailwindcss">
                <SiTailwindcss title="" className="size-10" color={SiTailwindcssHex} />
            </TechItem>
            <TechItem title="Sass">
                <SiSass title="" className="size-10" color={SiSassHex} />
            </TechItem>
            <TechItem title="Typescript">
                <SiTypescript title="" className="size-10 bg-white" color={SiTypescriptHex} />
            </TechItem>
            <TechItem title="PHP">
                <SiPhp title="" className="size-10" color={SiPhpHex} />
            </TechItem>
            <TechItem title="Node.js">
                <SiNodedotjs title="" className="size-10" color={SiNodedotjsHex} />
            </TechItem>
            <TechItem title="MySQL">
                <SiMysql title="" className="size-10" color={SiMysqlHex} />
            </TechItem>
            <TechItem title="MongoDB">
                <SiMongodb title="" className="size-10" color={SiMongodbHex} />
            </TechItem>
            <TechItem title="Python">
                <SiPython title="" className="size-10" color={SiPythonHex} />
            </TechItem>
            <TechItem title="Ren'Py">
                <SiRenpy title="" className="size-10" color={SiRenpyHex} />
            </TechItem>
            <TechItem title="Next.js">
                <SiNextdotjs title="" className="size-10" color={SiNextdotjsHex} />
            </TechItem>
            <TechItem title="React">
                <SiReact title="" className="size-10" color={SiReactHex} />
            </TechItem>
            <TechItem title="Chrome Extensions">
                <SiChromewebstore title="" className="size-10" color={SiChromewebstoreHex} />
            </TechItem>
            <TechItem title="Webpack">
                <SiWebpack title="" className="size-10" color={SiWebpackHex} />
            </TechItem>
            <TechItem title="Figma">
                <SiFigma title="" className="size-10" color={SiFigmaHex} />
            </TechItem>
            <TechItem title="Prisma">
                <SiPrisma title="" className="size-10" color={SiPrismaHex} />
            </TechItem>
            <TechItem title="Express">
                <SiExpress title="" className="size-10" color={SiExpressHex} />
            </TechItem>
        </>
    );
}

export default Techstacks;
