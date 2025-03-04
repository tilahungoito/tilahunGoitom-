"use client";
import { Project } from "@/data/types";

interface ModalProps
{
  project: Project;
  onClose: () => void;
}
export default function Modal({ project, onClose }: ModalProps)
{
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mt-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          View Project
        </a>
        <button className="mt-4 text-red-500" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
