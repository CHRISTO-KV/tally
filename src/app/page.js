"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import NumberTicker from "@/components/ui/number-ticker";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Cloud, 
  Settings, 
  BookOpen, 
  Headset, 
  Users 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "TallyPrime Sales",
    description: "Upgrade or buy new licenses of TallyPrime with expert guidance.",
    icon: <Building2 className="w-8 h-8 text-blue-500" />,
    className: "md:col-span-2",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />,
  },
  {
    title: "Tally on Cloud",
    description: "Access your Tally data from anywhere securely with our AWS/Azure solutions.",
    icon: <Cloud className="w-8 h-8 text-indigo-500" />,
    className: "md:col-span-1",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-200 to-purple-100 dark:from-indigo-900 dark:to-purple-800" />,
  },
  {
    title: "Tally Customization",
    description: "Tailor TallyPrime to fit your unique business workflows and reporting needs.",
    icon: <Settings className="w-8 h-8 text-green-500" />,
    className: "md:col-span-1",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-200 to-emerald-100 dark:from-green-900 dark:to-emerald-800" />,
  },
  {
    title: "Corporate Training",
    description: "Empower your team with comprehensive training on Tally features.",
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    className: "md:col-span-2",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-200 to-red-100 dark:from-orange-900 dark:to-red-800" />,
  },
];

const reviews = [
  { name: "Tech Mahindra", body: "Excellent support for our ERP integration." },
  { name: "L&T Construction", body: "Seamless transition to TallyPrime Server." },
  { name: "Apollo Tyres", body: "Great cloud hosting solutions and uptime." },
  { name: "Muthoot Finance", body: "Highly customized modules delivered on time." },
  { name: "Kalyan Silks", body: "Outstanding training and post-sales service." },
];

import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Hero Animations
    tl.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );

    // Scroll Animations for Services
    gsap.fromTo(
      servicesRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background">
      {/* Navbar Placeholder */}
      <header className="fixed top-0 w-full flex justify-between items-center p-6 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b">
        <div className="text-2xl font-bold tracking-tighter text-blue-900 dark:text-blue-400">Tally<span className="text-orange-500">Partner</span></div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="rounded-full px-6">Get a Demo</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center pt-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div ref={textRef} className="z-10 flex flex-col items-center text-center space-y-6 px-4 max-w-4xl">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            5-Star Certified Partner
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Empower Your Business <br/> with <span className="text-blue-600 dark:text-blue-400">TallyPrime</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl">
            Expert sales, seamless cloud integration, tailored customization, and dedicated support to scale your enterprise.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">Explore Services</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 dark:border-neutral-700 dark:hover:bg-neutral-800">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="w-full py-20 bg-neutral-50 dark:bg-neutral-900/50 border-y dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <NumberTicker value={20} />+
            </h3>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <NumberTicker value={2500} />+
            </h3>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <NumberTicker value={150} />+
            </h3>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Customizations</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <NumberTicker value={24} />/7
            </h3>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Support</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-4 bg-white dark:bg-background" ref={servicesRef}>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Our Premium Services</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">From procurement to implementation, we handle your end-to-step business accounting needs.</p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {services.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden flex flex-col items-center">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Trusted by Industry Leaders</h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">Hear from our clients who have transformed their accounting with us.</p>
        </div>
        <div className="relative flex w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((review, i) => (
              <div key={i} className="mx-4 flex w-72 flex-col gap-4 rounded-xl border dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{review.name}</span>
                    <span className="text-xs text-neutral-400">Verified Client</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{review.body}</p>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-50 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-neutral-50 dark:from-background"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-neutral-900 text-neutral-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter text-white">Tally<span className="text-orange-500">Partner</span></div>
            <p className="text-sm text-neutral-400">Empowering businesses with seamless accounting and cloud solutions.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Headset className="w-4 h-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Users className="w-4 h-4" /> info@tallypartner.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="text-xs text-neutral-400">Subscribe for the latest Tally updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-neutral-800 rounded-md px-3 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-blue-500" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Join</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center border-t border-neutral-800 pt-8 text-xs text-neutral-500">
          © 2026 Tally Partner. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
