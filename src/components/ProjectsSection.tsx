import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Zap, TrendingUp, Shield, Car, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { caelvi, carido, nexura, exptra } from '@/assets/project';

const projects = [
  {
    title: "Caelvi — Luxury Jewellery E-Commerce Platform",
    category: "Next.js · E-Commerce · Luxury UI",
    description:
      "A high-end jewellery e-commerce platform featuring curated collections, premium visuals, smooth navigation, and a conversion-focused luxury shopping experience.",
    image: caelvi,
    url: "https://caelvi.com",
    featured: true,
  },
  {
    title: "Carido — Smart Car Rental Platform",
    category: "Next.js · Booking System",
    description:
      "A modern car rental web app with seamless vehicle browsing, intuitive booking flow, and a clean UI designed for speed and usability.",
    image: carido,
    url: "https://car-rental-tau-wheat.vercel.app/",
    featured: true,
  },
  {
    title: "Nexura — Footwear E-Commerce Experience",
    category: "React.js · Firebase · E-Commerce",
    description:
      "A fast and responsive footwear e-commerce website with real-time data, smooth product browsing, and a scalable frontend architecture.",
    image: nexura,
    url: "https://nexura-shoes.vercel.app/",
    featured: false,
  },
  {
    title: "Finance Insight — Personal Finance Tracking Dashboard",
    category: "React.js · Tailwind CSS · Web App",
    description:
      "A personal finance dashboard that helps users track income and expenses, visualize spending patterns, and gain clear financial insights through a clean, intuitive interface.",
    image: exptra,
    url: "https://finance-insight-psi.vercel.app/",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Image */}
      <motion.div
        className={`relative group ${!isEven ? 'lg:order-2' : ''}`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-md border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <Button className="btn-gold gap-2" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Case Study
              </a>
            </Button>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-gold">
            Featured
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className={`space-y-8 ${!isEven ? 'lg:order-1' : ''}`}>
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent/60">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {project.title.split(' — ')[0]}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Tech Stack (Derived from category) */}
        <div className="flex flex-wrap gap-2">
          {project.category.split(' · ').map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        <div className="pt-4">
          <Button variant="ghost" className="group/link p-0 hover:bg-transparent text-accent hover:text-accent/80 transition-colors" asChild>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold tracking-widest uppercase text-xs">
              View Project
              <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-accent">
              Selected Works
            </span>
          </motion.div>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle mx-auto">
            A collection of production-grade applications that demonstrate my commitment
            to excellence in frontend engineering and UI/UX design.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
