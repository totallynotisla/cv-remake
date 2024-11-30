import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectType } from "@/app/data";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
    data: ProjectType;
    light?: boolean;
};

export default function ProjectCard({ data, light }: Props) {
    return (
        <Card className={`w-3/4 phone:w-full flex flex-col min-h-[20rem] group/tw isolate relative overflow-hidden ${!light && "text-white"}`} data-aos="fade-up">
            <Image
                src={data.thumbnail}
                className="object-cover group-hover/tw:blur-0 group-hover/tw:brightness-75 scale-105 transition duration-300 brightness-[.15] blur-sm w-full h-full absolute z-[-1] inset-0"
                width={480}
                height={480}
                alt={data.name}
            />
            <CardHeader className="group-hover/tw:-translate-y-full transition duration-300">
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
                <Button variant="secondary" className="group-hover/tw:scale-105 origin-left transition duration-300">
                    <Link href={`/projects/${data.detailHref}`} className="flex gap-2 items-center">
                        View Details <ArrowRight />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
