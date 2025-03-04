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
            title: "peerCourses",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/addcontent.png",
            link: "https://github.com/tilahungoito/tilahunGoitom-",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/mongodb.svg"],
        },
        {
            id: 2,
            title: "Integrating clerk -the complete authentication ",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/clerks' auth.png",
            link: "https://github.com/tilahungoito/tilahunGoitom-",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg", "/cisco.png", "/networking.png", "/adobe.svg", "/icons/illustrator.svg", "/figma.png", "/canva.png", "/git.svg", "/github.svg", "/trello.svg", "/word.png"],
        },
        {
            id: 3,
            title: "open market for  free",
            description: "A full-stack project with react, express and node with functionality",
            image: "/find product.png",
            link: "https://github.com/tilahungoito/tilahunGoitom-",
            icons: ["/javascript.svg", "/json", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg", "/cisco.png", "/networking.png", "/adobe.svg", "/icons/illustrator.svg", "/figma.png", "/canva.png", "/git.svg", "/github.svg", "/trello.svg", "/word.png"],
        },
        {
            id: 4,
            title: "Peercourses",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/mycourses.png",
            link: "https://peer-courses-tilahun-dtqk-git-main-tilahuns-projects-82416c09.vercel.app/",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg",]
        },
        {
            id: 5,
            title: "courses hub for any peers",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/peerCourses1.png",
            link: "https://peer-courses-tilahun-dtqk-git-main-tilahuns-projects-82416c09.vercel.app/",
            icons: ["/next.svg", "/react.svg", "/json.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
        },
        {
            id: 6,
            title: "find product any time and sale any thing away",
            description: "A full-stack project with Next.js and MongoDB.",
            image: "/procreate.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/boostrap.svg", "/node.png", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg", "/cisco.png", "/networking.png", "/adobe.svg", "/icons/illustrator.svg", "/figma.png", "/canva.png", "/git.svg", "/github.svg", "/trello.svg", "/word.png"],
        },
        {
            id: 7,
            title: "Shire referal",
            description: "appointment and patient management system with php and sql.",
            image: "/shire referal.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png", "/boostrap.svg", "/node.png", "/django.svg", "/expressjs.png", "/mongodb.svg", "/postgresql.svg", "/cisco.png", "/networking.png", "/adobe.svg", "/icons/illustrator.svg", "/figma.png", "/canva.png", "/git.svg", "/github.svg", "/trello.svg", "/word.png"],
        },
        {
            id: 8,
            title: "shire General referal",
            description: "appointment and patient management system with php and sql.",
            image: "/shiresingup.png",
            link: "https://yourproject.com",
            icons: ["/next.svg", "/react.svg", "/java.svg", "php.svg", "/typescript.svg", "/tailwind.png", "/html.svg", "/framer.png",],
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
            { name: "GitHub", url: "https://github.com/tilahungoito", icon: "/github.svg" },
            { name: "linkedin", url: "https://linkedin.com/profile/", icon: "/linkedin.svg" },
            { name: "Instagram", url: "https://instagram.com/yourusername", icon: "/instagram.svg" },
            { name: "Facebook", url: "https://leetcode.com/profile/", icon: "/facebook.svg" },
            { name: "TikTok", url: "https://tiktok.com/@yourusername", icon: "/tiktok.svg" },
            { name: "Twitter", url: "https://twitter.com/yourusername", icon: "/twitter.svg" },
        ],


};

