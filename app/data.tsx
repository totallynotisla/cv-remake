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
import React from "react";

export type ProjectType = {
    name: string;
    description: string;
    image: string;
    thumbnail: string;
    gallery: string[];
    status: Status;
    Techstacks: Techstack[];
    href: string;
    detailHref: string;
};

type Status = "archived" | "maintained" | "on-going" | "active";

type Techstack = {
    name: string;
    icon: JSX.Element;
};

export const Data: ProjectType[] = [
    {
        name: "Gerawana URL Shortener",
        description: "Gerawana URL Shortener is a simple and efficient tool to shorten long URLs, built with NextJS and TailwindCSS.",
        image: "/assets/porfolios/gerawana/gerawana-url.png",
        thumbnail: "/assets/porfolios/gerawana/gerawana-url.png",
        gallery: ["/assets/porfolios/gerawana/gerawana-url.png"],
        status: "archived",
        Techstacks: [
            {
                name: "NextJS",
                icon: <SiNextdotjs title="" className="size-10" color={SiNextdotjsHex} />,
            },
            {
                name: "TailwindCSS",
                icon: <SiTailwindcss title="" className="size-10" color={SiTailwindcssHex} />,
            },
            {
                name: "PostCSS",
                icon: <SiCss3 title="" className="size-10" color={SiCss3Hex} />,
            },
            {
                name: "ESLint",
                icon: <SiJavascript title="" className="size-10" color={SiJavascriptHex} />,
            },
            {
                name: "Prettier",
                icon: <SiJavascript title="" className="size-10" color={SiJavascriptHex} />,
            },
        ],
        href: "https://github.com/mangadi3859/gerawana-urlshort",
        detailHref: "gerawana",
    },
];
