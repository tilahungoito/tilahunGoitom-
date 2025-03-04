import { portfolioData } from "@/data";
import Image from "next/image";

export default function Footer()
{
    return (
        <footer className="py-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center flex w-full">
            {/* Divider Line */}
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-5 rounded-full"></div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6">
                {portfolioData.footer.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                        <Image
                            src={social.icon}
                            alt={social.name}
                            width={35}
                            height={35}
                            className="w-10 h-10 drop-shadow-lg hover:drop-shadow-xl"
                        />
                    </a>
                ))}
            </div>

            {/* Copyright */}
            <p className="mt-5 text-gray-400 text-sm">
                © 2024 All rights reserved.
            </p>
        </footer>
    );
}
