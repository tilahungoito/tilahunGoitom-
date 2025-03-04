import { portfolioData } from "@/data";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

export default function Skills()
{
    return (
        <Vortex>
            <section className="py-12 text-center relative z-10 bg-transparent">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>

                {Object.entries(portfolioData.skills).map(([category, skills]) => (
                    <div key={category} className="mb-8 bg-transparent">
                        <h3 className="text-xl font-semibold capitalize">{category}</h3>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 bg-transparent">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-transparent px-4 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                                >
                                    <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                                    <span className="text-sm font-medium mt-2">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </Vortex>
    );
}