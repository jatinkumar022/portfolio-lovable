import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-background relative overflow-hidden">
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
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-accent">
              Let's Connect
            </span>
          </motion.div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Let's build something <span className="text-gradient">extraordinary</span>.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                  <a href="mailto:jatinrmn@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                    jatinrmn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+917861035002" className="text-lg font-medium hover:text-accent transition-colors">
                    +91 7861035002
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-medium">Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 md:p-10 rounded-md bg-secondary/30 border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Name</label>
                  <Input
                    placeholder="Your Name"
                    className="bg-background border-border focus:border-accent/50 transition-colors py-6"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background border-border focus:border-accent/50 transition-colors py-6"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Subject</label>
                <Input
                  placeholder="Project Inquiry"
                  className="bg-background border-border focus:border-accent/50 transition-colors py-6"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="bg-background border-border focus:border-accent/50 transition-colors min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="btn-gold w-full py-7 gap-2 text-sm tracking-widest uppercase">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
