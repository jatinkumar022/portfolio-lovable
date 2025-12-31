import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 md:py-20 bg-background border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Info */}
          <div className="text-center md:text-left space-y-4">
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              JR<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building high-performance web experiences with precision and purpose.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              { icon: Mail, href: 'mailto:jatinrmn@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-foreground/5 border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            © {currentYear} Jatin Ramani. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-accent tracking-widest uppercase transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent tracking-widest uppercase transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
