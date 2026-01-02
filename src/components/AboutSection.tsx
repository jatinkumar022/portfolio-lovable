import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, Code2, TestTube, Rocket, Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Strategic Planning',
    description: 'Architecting scalable solutions with a focus on business goals and user needs.',
  },
  {
    icon: Code2,
    title: 'Precision Development',
    description: 'Writing clean, maintainable, and type-safe code using React and Next.js.',
  },
  {
    icon: TestTube,
    title: 'Quality Assurance',
    description: 'Ensuring high performance and reliability through rigorous testing and optimization.',
  },
  {
    icon: Rocket,
    title: 'Seamless Deployment',
    description: 'Delivering production-grade applications with smooth transitions and interactions.',
  },
];

const experiences = [
  {
    role: 'Software Engineer (React Developer)',
    company: 'Dvij Infotech LLP, Ahmedabad',
    period: 'Oct 2024 – Present',
    location: 'Ahmedabad, Gujarat',
    description: 'Developing and optimizing scalable React & Next.js applications. Integrating REST APIs and real-time data flows. Implementing state management using Redux Toolkit and Zustand.',
    tech: ['React', 'Next.js', 'Redux Toolkit', 'Zustand', 'Ant Design', 'Tailwind CSS'],
    achievements: ["20+ client projects", "Improved UX metrics"]
  },
  {
    role: 'Intern – React Developer',
    company: 'Dvij Infotech LLP, Ahmedabad',
    period: 'June 2024 – Oct 2024',
    location: 'Ahmedabad, Gujarat',
    description: 'Assisted in building React.js dashboards and integrated REST APIs. Collaborated with senior developers on production features.',
    tech: ['React.js', 'REST APIs', 'UI Logic', 'JavaScript'],
    achievements: ["Built dashboards", "Collaborated with seniors"]
  },
];

export const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/jatin_resume.pdf';
    link.download = 'jatin_resume.pdf';
    link.click();
  };
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            A Frontend Software Engineer dedicated to building high-performance,
            scalable web applications with a focus on modern UI/UX.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <p className="text-xl text-muted-foreground leading-relaxed">
            I specialize in React.js and Next.js, building production-grade web applications,
            dashboards, and e-commerce platforms. My approach combines clean architecture
            with business-driven design decisions to deliver pixel-perfect, responsive interfaces.
          </p>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mb-32"
        >
          <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-accent text-center mb-16">
            The Approach
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="p-8 rounded-md bg-secondary/30 border border-border text-center card-hover h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                  Professional Journey
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Building innovative solutions and contributing to high-impact projects.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Timeline dot */}

                    {/* Card */}
                    <motion.div
                      className="group relative bg-secondary/30 backdrop-blur-sm rounded-2xl border border-border overflow-hidden"
                      animate={{
                        borderColor: hoveredIndex === index ? 'hsl(var(--accent))' : 'hsl(var(--border))',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0"
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative p-8 md:p-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                          <div className="flex-1 min-w-[200px]">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {exp.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                              <span className="font-semibold text-foreground/80">{exp.company}</span>
                              <span className="flex items-center gap-1 text-sm">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                            >
                              <ArrowUpRight className="w-3 h-3" />
                              {achievement}
                            </span>
                          ))}
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                              className="px-4 py-2 text-sm font-medium text-muted-foreground bg-background/80 rounded-lg border border-border hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10 transition-all cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Decorative corner accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-20"
            >
              <p className="text-muted-foreground mb-6">Want to see more details?</p>

              <button className="btn-gold group" onClick={handleDownload}>

                <span className="flex items-center gap-2 text-sm tracking-widest uppercase font-bold !text-white dark:text-black">
                  Download Full Resume
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
