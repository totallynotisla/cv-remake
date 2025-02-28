import { Data } from "../../data";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import TechItem from "@/components/master/TechItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectDetail = ({ params }: { params: { detail: string } }) => {
    console.log(params);
    const { detail } = params;
    const data = Data.find((project) => project.detailHref === detail);
    if (!data) redirect("/projects");

    return (
        <main className="pt-24 pb-20 isolate relative flex flex-col gap-12">
            <Image className="w-full h-[20rem] object-cover brightness-50 absolute top-0 left-0 z-[-1]" alt="banner" src={data.thumbnail} width={500} height={500}></Image>
            <div className="container mt-[20rem] flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-4xl font-bold">{data.name}</h1>
                        <p>{data.description}</p>
                    </div>
                    <p>{data.longDescription}</p>
                </div>

                <div className="flex gap-4 phone:flex-col">
                    <Image className="h-auto phone:w-full w-[20rem] object-cover" alt="image" src={data.thumbnail} width={500} height={500}></Image>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col h-min gap-1">
                            <Badge className="bg-black text-white mr-auto rounded-full">Status</Badge>
                            <span className="text-sm text-black/75 uppercase">{data.status}</span>
                        </div>
                        <div className="flex flex-col h-min gap-1">
                            <Badge className="bg-black text-white mr-auto rounded-full">Techstacks</Badge>
                            <span className="text-sm text-black/75 uppercase gap-2 flex flex-wrap">
                                {data.Techstacks.map((e) => (
                                    <TechItem key={e.name} title={e.name}>
                                        {e.icon}
                                    </TechItem>
                                ))}
                            </span>
                        </div>
                        <div className="flex flex-col h-min gap-1">
                            <Badge className="bg-black text-white mr-auto rounded-full">Source</Badge>
                            <span className="text-sm text-black/75 uppercase">
                                {data.href == "PRIVATE" ? (
                                    <Badge className="bg-slate-300 text-black mr-auto rounded-full">PRIVATE</Badge>
                                ) : (
                                    <Link className="p-0" href={data.href}>
                                        <Button variant={"secondary"} className="px-4 bg-slate-300 py-0 text-sm">
                                            Open
                                        </Button>
                                    </Link>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetail;
