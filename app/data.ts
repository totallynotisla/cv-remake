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
} from "@icons-pack/react-simple-icons";
import React from "react";

export type ProjectType = {
    name: string;
    description: string;
    image: string;
    thumbnail: string;
    galerry: string[];
    status: Status;
    Techstacks: Techstack[];
    href: string;
};

type Status = "archived" | "maintained" | "on-going" | "active";

type Techstack = {
    name: string;
    icon: JSX.Element;
};
