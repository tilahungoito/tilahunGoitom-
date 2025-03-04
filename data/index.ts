import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
    navItems: [
        { name: "Home", link: "/" },
        { name: "Projects", link: "#projects" },
        { name: "Skills", link: "#skills" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#footer" },
    ],
    hero: {
        name: "Your Name",
        title: "Software Engineer & Full-Stack Developer",
        description: "I build scalable web and mobile applications with modern technologies.",
        cta: "Get my CV",
    },
    skills: {
        frontend: [
            { name: "Next.js", icon: "next.svg" },
            { name: "React", icon: "/react.svg" },
            { name: "TypeScript", icon: "/typescript.svg" },
            { name: "Tailwind CSS", icon: "/tailwind.png" },
            { name: "html|xml", icon: "/html.svg" },
            { name: "Framer Motion", icon: "/framer.png" },
            { name: "bootstrap", icon: "boostrap.svg" },
        ],
        backend: [
            { name: "Node.js", icon: "/node.png" },
            { name: "django", icon: "/django.svg" },
            { name: "Express.js", icon: "/expressjs.png" },
            { name: "MongoDB", icon: "/mongodb.svg" },
            { name: "PostgreSQL", icon: "/postgresql.svg" },
        ],
        networking: [
            { name: "Cisco Certified in Networking and Ethical hacker", icon: "/cisco.png" },
            { name: "Network Security", icon: "/networking.png" },
        ],
        design: [
            { name: "Adobe Photoshop", icon: "/adobe.svg" },
            { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
            { name: "Figma", icon: "/figma.png" },
            { name: "Canva", icon: "/canva.png" },
        ],
        tools: [
            { name: "Git", icon: "/git.svg" },
            { name: "GitHub", icon: "/github.svg" },
            { name: "Trello", icon: "/trello.svg" },
            //{ name: "Excel", icon: "/icons/excel.svg" },
            { name: "Word|Excel", icon: "/word.png" },
        ],
    },
    projects: [
        {
            id: 1,
            title: "Project One",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/addcontent.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
        },
        {
            id: 2,
            title: "Project One",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/clerks'auth.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
        },
        {
            id: 3,
            title: "Project One",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/find product.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
        },
        {
            id: 4,
            title: "Project One",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/mycourses.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],

        },
        {
            id: 5,
            title: "Project One",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/peerCourses.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
        },
        {
            id: 6,
            title: "Project One",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/peerCourses1.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/boostrap.svg", "/node.png", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg", "/cisco.png", "/networking.png", "/adobe.svg", "/icons/illustrator.svg", "/figma.png", "/canva.png", "/git.svg", "/github.svg", "/trello.svg", "/word.png"],
        },
        {
            id: 7,
            title: "Project Two",
            description: "A mobile app built with React Native and Supabase.",
            image: "/shire referal.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/boostrap.svg", "/node.png", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg", "/cisco.png", "/networking.png", "/adobe.svg", "/icons/illustrator.svg", "/figma.png", "/canva.png", "/git.svg", "/github.svg", "/trello.svg", "/word.png"],
        },
        {
            id: 8,
            title: "Project Two",
            description: "A mobile app built with React Native and Supabase.",
            image: "/shire referal.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
        },
    ],
    testimonials: [
        {
            quote: "This is the best service I've ever used! Highly recommended.",
            name: "John Doe",
            designation: "CEO, Company A",
            src: "/software0.png", // Path to image in the public folder
        },
        {
            quote: "Amazing experience with the team. They delivered beyond expectations.",
            name: "Jane Smith",
            designation: "CTO, Company B",
            src: "/software1.png",
        },
        {
            quote: "Incredible support and fast delivery. Will definitely work with them again.",
            name: "Alice Johnson",
            designation: "Founder, Company C",
            src: "/profile.jpg",
        },
    ],
    footer:
        [
            { name: "GitHub", url: "https://github.com/yourusername", icon: "/github.svg" },
            { name: "linkedin", url: "https://linkedin.com/in/yourusername", icon: "/linkedin.svg" },
            { name: "Instagram", url: "https://instagram.com/yourusername", icon: "/instagram.svg" },
            { name: "Facebook", url: "https://facebook.com/yourusername", icon: "/facebook.svg" },
            { name: "TikTok", url: "https://tiktok.com/@yourusername", icon: "/tiktok.svg" },
            { name: "Twitter", url: "https://twitter.com/yourusername", icon: "/twitter.svg" },
        ],


};

