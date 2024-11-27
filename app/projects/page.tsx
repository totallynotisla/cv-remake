import Aos from "@/components/master/Aos";

import { Data } from "../data";
import splitArray from "@/lib/splitarray";
import Project from "@/components/master/Project";

export default function Projects() {
    const [data1, data2] = splitArray(Data, 2);

    return (
        <main>
            <Aos />
            <section id="projects" className="pb-20 pt-24 bg-white">
                <div className="container flex flex-col">
                    <h2 data-aos="fade-up" className="text-3xl font-bold mx-auto">
                        All Projects
                    </h2>

                    <div className="flex phone:flex-col gap-12 w-full mt-24">
                        <div className="flex flex-col items-end gap-12 w-1/2 phone:w-full">
                            {data1.map((project, index) => (
                                <Project key={index} data={project} />
                            ))}
                        </div>
                        <div className="flex flex-col mt-12 items-start gap-12 w-1/2 phone:w-full phone:mt-0">
                            {data2.map((project, index) => (
                                <Project key={index} data={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
