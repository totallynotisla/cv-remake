import {
	SiJavascript,
	SiJavascriptHex,
	SiTypescript,
	SiTypescriptHex,
	// SiPhpHex,
	// SiPhp,
	SiNodedotjs,
	SiNodedotjsHex,
	SiVuedotjs,
	SiVuedotjsHex,
	SiLaravel,
	SiLaravelHex,
	SiBootstrap,
	SiBootstrapHex,
	// SiMysql,
	// SiMysqlHex,
	SiPython,
	SiPythonHex,
	SiRenpy,
	SiRenpyHex,
	SiNextdotjs,
	SiNextdotjsHex,
	SiChromewebstore,
	SiChromewebstoreHex,
	SiWebpack,
	SiWebpackHex,
	SiExpress,
	SiExpressHex,
	SiHtml5,
	SiHtml5Hex,
	SiCss3,
	SiCss3Hex,
	SiTailwindcss,
	SiTailwindcssHex,
	SiFfmpeg,
	SiFfmpegHex,
	SiAstro,
	SiReact,
	SiReactHex,
	SiDocker,
	SiDockerHex,
	SiAstroHex,
	SiGo,
	SiPostgresql,
	SiPostgresqlHex,
	SiGoHex,
	SiStrapi,
	SiStrapiHex,
} from "@icons-pack/react-simple-icons";
import React from "react";

export type ProjectType = {
	name: string;
	description: string;
	longDescription: string;
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
		name: "Website GMTI 2025",
		description: "Website for GMTI 2025 of STIKOM BALI.",
		longDescription:
			"Website for GMTI 2025 of STIKOM BALI. I was coordinator of web development division and also one of the developer for frontend page who also manages the deployment process and devops",
		image: "/assets/portfolio/gmti/gmti.jpg",
		thumbnail: "/assets/portfolio/gmti/gmti.jpg",
		gallery: ["/assets/portfolio/gmti/gmti.jpg"],
		status: "archived",
		Techstacks: [
			{
				name: "VueJs",
				icon: <SiVuedotjs title="" className="size-6" color={SiVuedotjsHex} />,
			},
			{
				name: "Laravel",
				icon: <SiLaravel title="" className="size-6" color={SiLaravelHex} />,
			},
			{
				name: "Bootstrap",
				icon: <SiBootstrap title="" className="size-6" color={SiBootstrapHex} />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript title="" className="size-6" color={SiTypescriptHex} />,
			},
		],
		href: "PRIVATE",
		detailHref: "gmti",
	},
	{
		name: "Website Fasttekno 2025 & 2026",
		description: "Website for Fasttekno 2025 & 2026",
		longDescription:
			"I was previously a Web Developer for Fasttekno 2025 & 2026. I was responsible for developing the backend page and also manages the deployment process and devops. I'm currently the coordinator of web development division for Fasttekno 2026",
		image: "/assets/portfolio/fasttekno26/3.png",
		thumbnail: "/assets/portfolio/fasttekno26/3.png",
		gallery: ["/assets/portfolio/fasttekno26/1.png", "/assets/portfolio/fasttekno26/2.png", "/assets/portfolio/fasttekno26/3.png"],
		status: "maintained",
		Techstacks: [
			{
				name: "Go",
				icon: <SiGo title="" className="size-6" color={SiGoHex} />,
			},
			{
				name: "PostgreSQL",
				icon: <SiPostgresql title="" className="size-6" color={SiPostgresqlHex} />,
			},
			{
				name: "Tailwind",
				icon: <SiTailwindcss title="" className="size-6" color={SiTailwindcssHex} />,
			},
			{
				name: "React",
				icon: <SiReact title="" className="size-6" color={SiReactHex} />,
			},
			{
				name: "Docker",
				icon: <SiDocker title="" className="size-6" color={SiDockerHex} />,
			},
			{
				name: "Astro",
				icon: <SiAstro title="" className="size-6" color={SiAstroHex} />,
			},
		],
		href: "PRIVATE",
		detailHref: "fasttekno",
	},
	{
		name: "Azari Villa",
		description: "Azari Villa is a dynamic company profile featuring villa listing, booking, company profile, and management system.",
		longDescription:
			"Azari Villa is a dynamic company profile featuring villa listing, booking, company profile, and management system. I was responsible for developing the frontend page and also manages the CI process and deployment cycles.",
		image: "/assets/portfolio/azari/1.png",
		thumbnail: "/assets/portfolio/azari/1.png",
		gallery: ["/assets/portfolio/azari/1.png", "/assets/portfolio/azari/2.png", "/assets/portfolio/azari/3.png", "/assets/portfolio/azari/4.png"],
		status: "maintained",
		Techstacks: [
			{
				name: "NextJs",
				icon: <SiNextdotjs title="" className="size-6" color={SiNextdotjsHex} />,
			},
			{
				name: "PostgreSQL",
				icon: <SiPostgresql title="" className="size-6" color={SiPostgresqlHex} />,
			},
			{
				name: "Tailwind",
				icon: <SiTailwindcss title="" className="size-6" color={SiTailwindcssHex} />,
			},
			{
				name: "React",
				icon: <SiReact title="" className="size-6" color={SiReactHex} />,
			},
			{
				name: "Docker",
				icon: <SiDocker title="" className="size-6" color={SiDockerHex} />,
			},
			{
				name: "Strapi",
				icon: <SiStrapi title="" className="size-6" color={SiStrapiHex} />,
			},
		],
		href: "PRIVATE",
		detailHref: "azari",
	},
	{
		name: "Kali Bali Properties",
		description: "Kali Bali Properties is a dynamic company profile featuring villa listing, booking, company profile, and management system.",
		longDescription:
			"Kali Bali Properties is a dynamic company profile featuring villa listing, booking, company profile, and management system. I was responsible for developing the frontend page and also manages the CI process and deployment cycles.",
		image: "/assets/portfolio/kalibali/3.png",
		thumbnail: "/assets/portfolio/kalibali/3.png",
		gallery: ["/assets/portfolio/kalibali/1.png", "/assets/portfolio/kalibali/2.png", "/assets/portfolio/kalibali/3.png", "/assets/portfolio/kalibali/4.png"],
		status: "maintained",
		Techstacks: [
			{
				name: "NextJs",
				icon: <SiNextdotjs title="" className="size-6" color={SiNextdotjsHex} />,
			},
			{
				name: "PostgreSQL",
				icon: <SiPostgresql title="" className="size-6" color={SiPostgresqlHex} />,
			},
			{
				name: "Tailwind",
				icon: <SiTailwindcss title="" className="size-6" color={SiTailwindcssHex} />,
			},
			{
				name: "React",
				icon: <SiReact title="" className="size-6" color={SiReactHex} />,
			},
			{
				name: "Docker",
				icon: <SiDocker title="" className="size-6" color={SiDockerHex} />,
			},
			{
				name: "Strapi",
				icon: <SiStrapi title="" className="size-6" color={SiStrapiHex} />,
			},
		],
		href: "PRIVATE",
		detailHref: "kalibali",
	},
	{
		name: "Gerawana URL Shortener",
		description: "Gerawana URL Shortener is a simple and efficient tool to shorten long URLs, built with NextJS and TailwindCSS.",
		longDescription:
			"Gerawana URL Shortener is a simple and efficient tool to shorten long URLs. It is built using NextJS and TailwindCSS, providing a modern and responsive user interface. The project includes features such as custom URL aliases and click tracking. It is designed to be easy to use and deploy, making it a great solution for anyone looking to manage and share links more effectively.",
		image: "/assets/portfolio/gerawana/gerawana-url.png",
		thumbnail: "/assets/portfolio/gerawana/gerawana-url.png",
		gallery: ["/assets/portfolio/gerawana/gerawana-url.png"],
		status: "maintained",
		Techstacks: [
			{
				name: "NextJS",
				icon: <SiNextdotjs title="" className="size-6" color={SiNextdotjsHex} />,
			},
			{
				name: "TailwindCSS",
				icon: <SiTailwindcss title="" className="size-6" color={SiTailwindcssHex} />,
			},
			{
				name: "CSS",
				icon: <SiCss3 title="" className="size-6" color={SiCss3Hex} />,
			},
			{
				name: "NodeJS",
				icon: <SiNodedotjs title="" className="size-6" color={SiNodedotjsHex} />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript title="" className="size-6" color={SiTypescriptHex} />,
			},
		],
		href: "https://github.com/totallynotisla/gerawana-urlshort",
		detailHref: "gerawana",
	},

	{
		name: "SpriteWeb Fix",
		description: "A local site to fix visual novel sprites, built with nodejs and express.",
		longDescription:
			"SpriteWeb Fix is a local web application designed to assist in fixing visual novel sprites. Built with Node.js and Express, it provides a user-friendly interface for managing and editing sprite images. The application supports various image formats and offers tools for adjusting sprite positions, sizes, and other properties. It aims to streamline the process of sprite correction, making it easier for developers and artists to maintain visual consistency in their projects.",
		image: "/assets/portfolio/sprite/sprite.png",
		thumbnail: "/assets/portfolio/sprite/sprite.png",
		gallery: ["/assets/portfolio/sprite/sprite.png"],
		status: "archived",
		Techstacks: [
			{
				name: "NodeJS",
				icon: <SiNodedotjs title="" className="size-6" color={SiNodedotjsHex} />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript title="" className="size-6" color={SiTypescriptHex} />,
			},
			{
				name: "JavaScript",
				icon: <SiJavascript title="" className="size-6" color={SiJavascriptHex} />,
			},
			{
				name: "CSS",
				icon: <SiCss3 title="" className="size-6" color={SiCss3Hex} />,
			},
			{
				name: "HTML",
				icon: <SiHtml5 title="" className="size-6" color={SiHtml5Hex} />,
			},
			{
				name: "Express",
				icon: <SiExpress title="" className="size-6" color={SiExpressHex} />,
			},
			{
				name: "FFmpeg",
				icon: <SiFfmpeg title="" className="size-6" color={SiFfmpegHex} />,
			},
		],
		href: "https://github.com/totallynotisla/spriteweb",
		detailHref: "spriteweb",
	},

	{
		name: "Youtube Block Bypass",
		description: "A chrome extension to bypass youtube block, built with javascript and webpack",
		longDescription:
			"Youtube Block Bypass is a Chrome extension designed to bypass YouTube's anti-ad blocker mechanisms. Built with JavaScript and Webpack, this extension allows users to watch YouTube videos without interruptions from ads by embedding the video in an iframe. It features a simple and intuitive interface, making it easy for users to enable or disable the ad-block bypass functionality. The extension is lightweight and efficient, ensuring minimal impact on browsing performance while providing an uninterrupted viewing experience on YouTube.",
		image: "/assets/portfolio/ytblock/image.png",
		thumbnail: "/assets/portfolio/ytblock/image.png",
		gallery: ["/assets/portfolio/ytblock/image.png"],
		status: "archived",
		Techstacks: [
			{
				name: "Chrome Web Store",
				icon: <SiChromewebstore title="" className="size-6" color={SiChromewebstoreHex} />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript title="" className="size-6" color={SiTypescriptHex} />,
			},
			{
				name: "Webpack",
				icon: <SiWebpack title="" className="size-6" color={SiWebpackHex} />,
			},
		],
		href: "https://github.com/totallynotisla/youtube-block-bypass-extension",
		detailHref: "ytblock",
	},

	{
		name: "Oregairu Zoku PC Port",
		description: "Oregairu visual novel port to PC, built with Ren'Py",
		longDescription:
			"Oregairu Zoku PC Port is a project that ports the Oregairu visual novel to PC using Ren'Py. It aims to provide a seamless experience for fans of the series, allowing them to enjoy the visual novel on their computers.",
		image: "/assets/portfolio/zoku/image.png",
		thumbnail: "/assets/portfolio/zoku/image.png",
		gallery: ["/assets/portfolio/zoku/image.png"],
		status: "maintained",
		Techstacks: [
			{
				name: "Ren'Py",
				icon: <SiRenpy title="" className="size-6" color={SiRenpyHex} />,
			},
			{
				name: "Python",
				icon: <SiPython title="" className="size-6" color={SiPythonHex} />,
			},
		],
		href: "PRIVATE",
		detailHref: "zoku",
	},

	{
		name: "Oregairu Kan PC Port",
		description: "Oregairu visual novel port to PC, built with Ren'Py",
		longDescription:
			"Oregairu Kan PC Port is a project that ports the Oregairu visual novel to PC using Ren'Py. It aims to provide a seamless experience for fans of the series, allowing them to enjoy the visual novel on their computers.",
		image: "/assets/portfolio/kan/image.jpg",
		thumbnail: "/assets/portfolio/kan/image.jpg",
		gallery: ["/assets/portfolio/kan/image.jpg"],
		status: "on-going",
		Techstacks: [
			{
				name: "Ren'Py",
				icon: <SiRenpy title="" className="size-6" color={SiRenpyHex} />,
			},
			{
				name: "Python",
				icon: <SiPython title="" className="size-6" color={SiPythonHex} />,
			},
		],
		href: "PRIVATE",
		detailHref: "kan",
	},

	// {
	//     name: "Doujin PDF Downloader",
	//     description: "A chrome extension to download pdf from doujin on the site",
	//     longDescription:
	//         "Doujin PDF Downloader is a Chrome extension that allows users to download PDFs from doujin websites. Built with TypeScript and Webpack, this extension provides a seamless and efficient way to save doujin content for offline reading. The extension integrates directly with the Chrome browser, offering a user-friendly interface for selecting and downloading PDFs. It supports various doujin websites and ensures that the downloaded files maintain their original quality. The Doujin PDF Downloader is designed to be lightweight and easy to use, making it a valuable tool for doujin enthusiasts.",
	//     image: "/assets/portfolio/djd/image.png",
	//     thumbnail: "/assets/portfolio/djd/image.png",
	//     gallery: ["/assets/portfolio/djd/image.png"],
	//     status: "maintained",
	//     Techstacks: [
	//         {
	//             name: "Chrome Web Store",
	//             icon: <SiChromewebstore title="" className="size-6" color={SiChromewebstoreHex} />,
	//         },
	//         {
	//             name: "TypeScript",
	//             icon: <SiTypescript title="" className="size-6" color={SiTypescriptHex} />,
	//         },
	//         {
	//             name: "Webpack",
	//             icon: <SiWebpack title="" className="size-6" color={SiWebpackHex} />,
	//         },
	//     ],
	//     href: "https://github.com/totallynotisla/nhentai-downloader",
	//     detailHref: "doujinpdf",
	// },
];
