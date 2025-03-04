// components/Testimonials.tsx
"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testmonial";
import { portfolioData } from "@/data";
const { testimonials } = portfolioData;
export default function Testimonials() 
{
    return (
        <section className="py-20">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </section>
    );
};