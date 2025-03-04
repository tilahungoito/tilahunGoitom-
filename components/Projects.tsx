"use client";
import { useState } from "react";
import { portfolioData, } from "@/data";
import Modal from "./Modal";
import { Project } from "@/data/types";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Projects()
{
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="py-12 text-center">
            <h2 className="text-3xl font-bold">Recent Projects</h2>

            {/* Ensure full width for grid layout */}
            <div className="mt-6 grid md:grid-cols-2 gap-6 w-full">
                {portfolioData.projects.map((project) => (
                    <PinContainer key={project.id} title={project.title} className="w-full">
                        {/* Card container should take full width */}
                        <div
                            className="relative cursor-pointer bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col h-full w-full"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image Container - Full Width */}
                            <div className="w-full h-52 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md mb-4">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600} // Larger width
                                        height={300}
                                        className="w-full h-full  rounded-md"
                                    />
                                ) : (
                                    <span className="text-gray-500 dark:text-gray-400">No Image Available</span>
                                )}
                            </div>

                            {/* Profile Image */}
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                height={160}
                                width={300}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
                            />

                            {/* Project Title */}
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                            {/* Project Description */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Bottom SVG Icons */}
                            <div className="mt-4 py-2 flex justify-center gap-2">
                                {project.icons?.map((icon, i) => (
                                    <div key={i} className="w-4 h-4 relative"> {/* Small icon size */}
                                        <Image
                                            src={icon}
                                            alt={`Icon ${i + 1}`}
                                            width={16} // Small width
                                            height={16} // Small height
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PinContainer>
                ))}
            </div>

            {/* Modal for Project Details */}
            {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}
