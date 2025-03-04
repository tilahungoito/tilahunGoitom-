
export interface NavItem
{
    name: string;
    link: string;
}
export interface socialLinks
{
    name: string;
    url: string;
    icon: string;

};

export interface Project
{
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    icons: string[];
}

export interface Testimonial
{
    quote: string;
    name: string;
    designation: string;
    src: string;
}
export interface Skill
{
    name: string;
    icon: string;
}

export interface PortfolioData
{
    navItems: NavItem[];
    hero: {
        name: string;
        title: string;
        description: string;
        cta: string;
    };
    skills: {
        frontend: Skill[];
        backend: Skill[];
        networking: Skill[];
        design: Skill[];
        tools: Skill[];

        // Add other skill categories as needed
    };
    projects: Project[];
    testimonials: Testimonial[];
    footer: {
        email: string; // Add email here
        socialLinks: socialLinks[]; // Keep the existing socialLinks array
    };
}
