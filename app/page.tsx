import Image from "next/image";
import { Button } from "@/components/ui/button";
import Aos from "@/components/master/Aos";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SiLinkedin, SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";

import HeroImage from "@/public/assets/hero-image.png";
import Link from "next/link";
import { Palette, Paintbrush, Cog, Split } from "lucide-react";
import Techstacks from "@/components/master/Techstacks";

import { Data } from "./data";
import splitArray from "@/lib/splitarray";
import Project from "@/components/master/Project";

export default function Home() {
    const [data1, data2] = splitArray(Data.slice(0, 4), 2);

    return (
        <main>
            <Aos />
            <header id="hero" className="min-h-[100vh] grid place-items-center isolate relative">
                <div className="bg-hero-pattern bg-contain pointer-events-none opacity-50 inset-0 absolute z-[-2]"></div>
                <div className="bottom-0 left-0 w-full h-[35%] pointer-events-none bg-gradient-to-t from-white to-transparent absolute z-[-1]"></div>
                <div className="top-0 left-0 w-full h-[15%] pointer-events-none bg-gradient-to-b from-white to-transparent absolute z-[-1]"></div>

                <div className="container flex items-center justify-between h-full">
                    <div className="w-1/2 relative">
                        <Image data-aos="fade-up" src={HeroImage} alt="Hero" className="h-auto" />

                        <Card data-aos="fade-up" data-aos-delay="500" className="absolute shadow-lg p-4 right-12 top-1/3 text-white bg-blue-800 border-none rounded-sm">
                            <div className="font-bold text-2xl">4+ Years</div>
                            <p>Fullstack Experiences</p>
                        </Card>

                        <Card data-aos="fade-up" data-aos-delay="500" className="absolute shadow-lg p-4 left-1/2 top-[75%] text-white bg-[#2f2f36] border-none rounded-sm">
                            <div className="font-bold text-2xl">Problem</div>
                            <p>Solving with algorithm</p>
                        </Card>
                    </div>

                    <div data-aos="fade-up" className="flex flex-col gap-4 w-1/2">
                        <h1 className="text-5xl font-bold w-full">
                            Hi! I am <span className="text-primary">Adi</span> and
                            <br />I am a <span className="text-primary">Developer</span>
                        </h1>
                        <p className="text-lg">My job is to transform your ideas into reality through the power of code, crafting efficient, scalable, and innovative solutions that bring your vision to life and exceed your expectations.</p>
                        <Button className="mr-auto">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <section id="about" className="py-20">
                <div className="container flex gap-[3rem] items-center">
                    <div className="flex flex-col w-1/2 gap-4">
                        <h2 data-aos="fade-up" className="text-4xl font-bold">
                            About Myself
                        </h2>
                        <p data-aos="fade-up" className="opacity-75">
                            I am a Fullstack Developer with 4+ years of experience in developing web applications, mobile applications, and backend services. I have a strong foundation in computer science and software engineering
                            principles, which allows me to design and develop scalable and maintainable software solutions.
                        </p>
                        <Button data-aos="fade-up" className="mr-auto mt-4">
                            <Link href="https://www.linkedin.com/in/komang-adi-wirawan-b844802b5/">Hire me</Link>
                        </Button>
                        <div data-aos="fade-up" className="flex items-center">
                            <div className="flex">
                                <div className="aspect-square border-[3px] border-white rounded-full size-8 overflow-hidden bg-[#0A66C2] p-[.35rem]">
                                    <SiLinkedin className="size-full" color="white" />
                                </div>
                                <div className="border-[3px] border-white translate-x-[calc(-1*.75rem)] aspect-square rounded-full size-8 overflow-hidden bg-[#181717] p-[.35rem]">
                                    <SiGithub className="size-full" color="white" />
                                </div>
                                <div className="border-[3px] border-white translate-x-[calc(-2*.75rem)] aspect-square rounded-full size-8 overflow-hidden bg-[#E4405F] p-[.35rem]">
                                    <SiInstagram className="size-full" color="white" />
                                </div>
                            </div>

                            <span className="text-xs translate-x-[calc(-2*.5rem)] font-bold fcode">+3 socials</span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-primary/20 p-8 rounded-xl w-1/2 flex flex-col gap-4">
                        <Card className="p-4 flex gap-4 items-center scale-105 border-primary/75 -translate-y-[5%] border-2">
                            <div className="p-4 rounded-full aspect-square bg-primary/75">
                                <Palette className="text-white size-6" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">Developer</h2>
                                <p className="text-sm mt-1 opacity-65">I create dynamic web applications using React, Next.js, and Node.js, building full-featured applications from scratch.</p>
                            </div>
                        </Card>

                        <Card className="p-4 flex gap-4 items-center">
                            <div className="p-4 rounded-full aspect-square bg-primary/75">
                                <Paintbrush className="text-white size-6" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">Design</h2>
                                <p className="text-sm mt-1 opacity-65">I craft visually appealing and user-friendly interfaces, ensuring a seamless user experience.</p>
                            </div>
                        </Card>

                        <Card className="p-4 flex gap-4 items-center">
                            <div className="p-4 rounded-full aspect-square bg-primary/75">
                                <Cog className="text-white size-6" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">Algorithm</h2>
                                <p className="text-sm mt-1 opacity-65">I excel in problem-solving and algorithm design, optimizing code for performance and efficiency.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="techstacks" className="py-20 bg-slate-100">
                <div className="container flex flex-col gap-12">
                    <h2 data-aos="fade-up" className="text-3xl font-bold mx-auto">
                        Techstacks
                    </h2>
                    <div data-aos="fade-up" className="flex flex-wrap gap-12 justify-center w-full">
                        <Techstacks />
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-white">
                <div className="container flex flex-col">
                    <h2 data-aos="fade-up" className="text-3xl font-bold mx-auto">
                        Featured Projects
                    </h2>

                    <div className="flex gap-12 w-full mt-24">
                        <div className="flex flex-col items-end gap-12 w-1/2">
                            {data1.map((project, index) => (
                                <Project key={index} data={project} />
                            ))}
                        </div>
                        <div className="flex flex-col mt-12 items-start gap-12 w-1/2">
                            {data2.map((project, index) => (
                                <Project key={index} data={project} />
                            ))}
                        </div>
                    </div>

                    <Link href="/projects" className="mx-auto" data-aos="fade-up">
                        <Button className="mx-auto mt-12">View All Projects</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
