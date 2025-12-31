import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  MapPin,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const education = [
  {
    degree: 'MCA',
    fullDegree: 'Master of Computer Applications',
    institution: 'Jain (Deemed-to-be University)',
    location: 'Bangalore',
    period: '2024 – 2026',
    status: 'In Progress',
    description: 'Specializing in advanced software engineering and modern web technologies.',
    highlights: [
      'Advanced Algorithms',
      'Cloud Computing',
      'Full Stack Development',
      'Software Architecture'
    ]
  },
  {
    degree: 'BCA',
    fullDegree: 'Bachelor of Computer Applications',
    institution: 'Saurashtra University',
    location: 'Rajkot',
    period: '2021 – 2024',
    status: 'Completed',
    description: 'Foundation in computer science, algorithms, and web development.',
    highlights: [
      'Data Structures',
      'Web Technologies',
      'Database Management',
      'OOP Concepts'
    ]
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="education" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-accent">
              Academic Background
            </span>
          </motion.div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">
            My academic foundation that supports my professional growth and technical expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}


                {/* Education Card */}
                <motion.div
                  className="group relative bg-secondary/30 backdrop-blur-sm rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/30"
                  animate={{
                    borderColor: hoveredIndex === index ? 'hsl(var(--accent))' : 'hsl(var(--border))',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative p-8 md:p-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                          rotate: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <GraduationCap className="w-8 h-8 text-accent" />
                      </motion.div>

                      {/* Title and Meta */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                                {edu.degree}
                              </h3>
                              <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
                                {edu.status}
                              </span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-2">{edu.fullDegree}</p>
                          </div>
                        </div>

                        {/* Institution Info */}
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent" />
                            <span className="font-semibold text-foreground/80">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-background/50 border border-border">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-sm font-bold text-muted-foreground">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                      {edu.description}
                    </p>

                    {/* Key Subjects/Highlights */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Specializations</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {edu.highlights.map((highlight, i) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.2 + index * 0.1 + i * 0.05 }}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground bg-background/50 border border-border rounded-xl hover:border-accent/40 hover:text-accent transition-all cursor-default"
                          >
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 rounded-bl-full group-hover:opacity-100 transition-opacity"
                  />

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                    animate={{
                      translateX: hoveredIndex === index ? '200%' : '-100%',
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};