import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "next-themes";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.process, href: "/process" },
    { name: t.nav.successStories, href: "/success-stories" }, // New link
    { name: t.nav.about, href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3 shadow-md"
          : "bg-background/40 backdrop-blur-sm py-5 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <Logo size={32} className="transition-transform group-hover:scale-105" />
            <span className="font-display font-bold text-xl tracking-tight text-foreground transition-colors">
              DataLyra
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary font-bold" : "text-muted-foreground"
              )}>
                {link.name}
              </a>
            </Link>
          ))}
          
          <div className="flex items-center gap-2 border-l border-border pl-6 ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-primary"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Languages className="h-5 w-5" />
                  <span className="sr-only">Switch Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  Español {language === 'es' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button 
            className="rounded-full px-6"
            onClick={() => {
                if (location !== '/') {
                    window.location.href = '/#contact';
                } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
            }}
          >
            {t.nav.getStarted}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            <button
            className="p-2 text-muted-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
                <a
                className="text-base font-medium text-foreground py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
                >
                {link.name}
                </a>
            </Link>
          ))}
          <div className="flex items-center justify-between py-2 border-t border-border mt-2 pt-4">
             <span className="text-sm font-medium text-muted-foreground">Language</span>
             <div className="flex gap-2">
                <Button 
                    variant={language === 'en' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => setLanguage('en')}
                >
                    EN
                </Button>
                <Button 
                    variant={language === 'es' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => setLanguage('es')}
                >
                    ES
                </Button>
             </div>
          </div>
          <Button 
            className="w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.nav.getStarted}
          </Button>
        </div>
      )}
    </nav>
  );
}
