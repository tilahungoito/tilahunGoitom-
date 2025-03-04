// components/Testimonials.tsx
"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testmonial";
import { portfolioData } from "@/data";
const { testimonials } = portfolioData;
export default function Testimonials() 
{
    return (
        <section className="py-20">
            <p className="flex-1/2 px-100 text-cyan-50">Kind words from others</p>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </section>
    );
};