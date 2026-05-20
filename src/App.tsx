import { ElementType, MouseEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

const portraitUrl = 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const decorativeImages = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const contactEmail = 'roshanarun1@gmail.com';
const contactPhone = '+46 72 8359978';
const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Portfolio enquiry for Roshan Arun')}&body=${encodeURIComponent('Hi Roshan,\n\nI would like to talk about a design project.\n\n')}`;

function websiteScreenshot(url: string, width: number, height: number) {
  const params = new URLSearchParams({
    url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': String(width),
    'viewport.height': String(height),
    waitForTimeout: '1600',
  });

  return `https://api.microlink.io/?${params.toString()}`;
}

const services = [
  {
    number: '01',
    name: 'Websites & Landing Pages',
    description:
      'High-end websites and landing pages built around story, clarity, conversion, and a polished front-end experience.',
  },
  {
    number: '02',
    name: 'Visual Branding',
    description:
      'Distinctive identity systems, typography, color, and art direction that help brands feel clear, memorable, and ownable.',
  },
  {
    number: '03',
    name: 'Product Design',
    description:
      'Thoughtful interface design that turns complex products into intuitive, useful, and visually refined digital experiences.',
  },
  {
    number: '04',
    name: 'Brand Systems',
    description:
      'Reusable visual systems for websites, campaigns, and product surfaces so every detail feels consistent and intentional.',
  },
  {
    number: '05',
    name: 'Motion & Interaction',
    description:
      'Smooth transitions, scroll rhythm, and micro-interactions that add craft without getting in the way of clarity.',
  },
];

const projects = [
  {
    number: '01',
    category: 'Local Brand',
    name: 'Mamma Bakery',
    url: 'https://mammabakery.se/',
    images: [
      websiteScreenshot('https://mammabakery.se/', 1440, 900),
      websiteScreenshot('https://mammabakery.se/', 390, 844),
      websiteScreenshot('https://mammabakery.se/', 1680, 1200),
    ],
  },
  {
    number: '02',
    category: 'Editorial Blog',
    name: 'The AI Blog',
    url: 'https://roshanarun1991.github.io/The.AI.Blog/#blog',
    images: [
      websiteScreenshot('https://roshanarun1991.github.io/The.AI.Blog/#blog', 1440, 900),
      websiteScreenshot('https://roshanarun1991.github.io/The.AI.Blog/#blog', 390, 844),
      websiteScreenshot('https://roshanarun1991.github.io/The.AI.Blog/#blog', 1680, 1200),
    ],
  },
  {
    number: '03',
    category: 'Studio Presence',
    name: 'Stockholm Designs',
    url: 'https://www.stockholmdesigns.com/',
    images: [
      websiteScreenshot('https://www.stockholmdesigns.com/', 1440, 900),
      websiteScreenshot('https://www.stockholmdesigns.com/', 390, 844),
      websiteScreenshot('https://www.stockholmdesigns.com/', 1680, 1200),
    ],
  },
  {
    number: '04',
    category: 'AI Tool',
    name: 'AI SEO',
    url: 'https://ai-seo-91ee.onrender.com/',
    images: [
      websiteScreenshot('https://ai-seo-91ee.onrender.com/', 1440, 900),
      websiteScreenshot('https://ai-seo-91ee.onrender.com/', 390, 844),
      websiteScreenshot('https://ai-seo-91ee.onrender.com/', 1680, 1200),
    ],
  },
];
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}
type FadeInProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
} & Omit<HTMLMotionProps<'div'>, 'children'>;

function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as as never), [as]) as typeof motion.div;

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const active =
      event.clientX >= rect.left - padding &&
      event.clientX <= rect.right + padding &&
      event.clientY >= rect.top - padding &&
      event.clientY <= rect.bottom + padding;

    if (!active) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (event.clientX - centerX) / strength;
    const y = (event.clientY - centerY) / strength;

    setTransition(activeTransition);
    setTransform(`translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0px)`);
  }

  function handleMouseLeave() {
    setTransition(inactiveTransition);
    setTransform('translate3d(0px, 0px, 0px)');
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

function ContactButton() {
  return (
    <motion.a
      href={contactHref}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex min-h-[44px] items-center justify-center gap-2 px-0 py-0 text-sm font-medium uppercase leading-[14px] tracking-normal text-[#E33529] transition duration-200 hover:opacity-80 focus-visible:border-b focus-visible:border-[#E33529] focus-visible:outline-none"
    >
      Contact Me
      <Send aria-hidden="true" size={18} strokeWidth={2.3} />
    </motion.a>
  );
}

function LiveProjectButton({ href = '#contact' }: { href?: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      onClick={(event) => event.stopPropagation()}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex min-h-[44px] items-center justify-center gap-2 px-0 py-0 font-serif text-base font-normal normal-case tracking-normal text-[#0000EE] transition duration-200 hover:text-[#007AFF] hover:opacity-70 focus-visible:border-b focus-visible:border-[#0000EE] focus-visible:outline-none"
    >
      Live Project
      <ArrowUpRight aria-hidden="true" size={19} strokeWidth={2.4} />
    </motion.a>
  );
}

function HeroSection() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-x-clip bg-[#F4CED3] text-black md:h-screen">
      <div className="relative z-20 w-full overflow-visible px-3 pt-8 sm:pt-8 md:pt-10">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading mx-auto w-full max-w-[96vw] whitespace-nowrap text-center text-[clamp(4.8rem,15.4vw,18rem)] font-normal uppercase tracking-normal">
          Roshan Arun
        </FadeIn>
        <FadeIn as="nav" delay={0.28} y={14} className="mt-2 flex justify-center gap-x-6 font-kanit text-sm font-medium uppercase leading-[14px] tracking-normal text-[#E33529] sm:mt-3 sm:gap-x-8 md:mt-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="min-h-[44px] content-center transition duration-200 hover:opacity-70 focus-visible:border-b focus-visible:border-[#E33529] focus-visible:outline-none">
              {item.label}
            </a>
          ))}
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 top-[47%] z-10 w-[min(76vw,320px)] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
        >
          <img
            src={portraitUrl}
            alt="3D portrait of Roshan Arun"
            className="h-auto w-full select-none object-contain drop-shadow-[rgba(221,198,202,0.55)_-14px_20px_34px]"
            draggable={false}
            loading="eager"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto grid gap-5 px-4 pb-6 sm:grid-cols-[minmax(220px,300px)_auto] sm:items-end sm:justify-between sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn as="p" delay={0.35} y={20} className="max-w-[240px] font-serif text-[clamp(1rem,1.4vw,1.5rem)] font-normal normal-case leading-normal tracking-normal text-black md:max-w-[300px]">
          brand and web design specialist creating digital experiences across web, branding, and product design
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="sm:justify-self-end">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}



function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rowOne = marqueeImages.slice(0, 11);
  const rowTwo = marqueeImages.slice(11);

  useEffect(() => {
    function updateOffset() {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    }

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    window.addEventListener('resize', updateOffset);

    return () => {
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#F3F3E9] pt-16 pb-8 sm:pt-32 md:pt-40 md:pb-10" aria-label="Animated project previews">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={rowOne} x={offset - 200} />
        <MarqueeRow images={rowTwo} x={-(offset - 200)} />
      </div>
    </section>
  );
}

function MarqueeRow({ images, x }: { images: string[]; x: number }) {
  const repeated = [...images, ...images, ...images];

  return (
    <div className="overflow-visible">
      <div
        className="flex w-max gap-3"
        style={{ transform: `translate3d(${x}px, 0, 0)`, willChange: 'transform' }}
      >
        {repeated.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt="Animated website preview"
            loading="lazy"
            className="h-[180px] w-[280px] flex-none rounded-[4px] object-cover shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const words = text.split(' ');
  const total = words.reduce((sum, word) => sum + Array.from(word).length, 0);
  let characterIndex = 0;

  return (
    <p ref={ref} className="max-w-[min(680px,92vw)] text-center font-serif text-[clamp(1rem,2vw,1.35rem)] font-normal leading-normal text-black">
      {words.map((word, wordIndex) => {
        const letters = Array.from(word);
        const startIndex = characterIndex;
        characterIndex += letters.length;

        return (
          <span key={`${word}-${wordIndex}`} className="inline whitespace-normal">
            <span className="inline-block whitespace-nowrap">
              {letters.map((char, letterIndex) => (
                <AnimatedCharacter
                  key={`${word}-${wordIndex}-${letterIndex}`}
                  char={char}
                  index={startIndex + letterIndex}
                  total={total}
                  progress={scrollYProgress}
                />
              ))}
            </span>
            {wordIndex < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, start + 0.16);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="invisible">{displayChar}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {displayChar}
      </motion.span>
    </span>
  );
}

function AboutSection() {
  const paragraph = "I am Roshan Arun, a designer based in Stockholm with experience creating digital experiences across web, branding, and product design. I begin with observation before assumptions, looking at a brand through the people using it first, then shaping thoughtful experiences built on clarity, intention, and experimentation.";

  return (
    <section id="about" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#F4CED3] px-4 py-20 text-black sm:px-8 md:min-h-screen md:px-10">
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="pointer-events-none absolute top-[5%] left-[1%] w-[72px] opacity-55 sm:left-[2%] sm:w-[130px] sm:opacity-80 md:left-[4%] md:w-[210px] md:opacity-100">
        <img src={decorativeImages.moon} alt="" loading="lazy" className="w-full object-contain" />
      </FadeIn>
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="pointer-events-none absolute bottom-[7%] left-[3%] w-[64px] opacity-45 sm:left-[6%] sm:w-[120px] sm:opacity-75 md:left-[10%] md:w-[180px] md:opacity-100">
        <img src={decorativeImages.object} alt="" loading="lazy" className="w-full object-contain" />
      </FadeIn>
      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="pointer-events-none absolute top-[6%] right-[1%] w-[72px] opacity-55 sm:right-[2%] sm:w-[130px] sm:opacity-80 md:right-[4%] md:w-[210px] md:opacity-100">
        <img src={decorativeImages.lego} alt="" loading="lazy" className="w-full object-contain" />
      </FadeIn>
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="pointer-events-none absolute bottom-[7%] right-[3%] w-[76px] opacity-45 sm:right-[6%] sm:w-[140px] sm:opacity-75 md:right-[10%] md:w-[220px] md:opacity-100">
        <img src={decorativeImages.group} alt="" loading="lazy" className="w-full object-contain" />
      </FadeIn>

      <div className="relative z-10 flex w-full flex-col items-center gap-8 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40} className="hero-heading text-center text-[clamp(3.4rem,16vw,160px)] font-normal uppercase tracking-normal">
          About me
        </FadeIn>
        <div className="flex flex-col items-center gap-10 sm:gap-20 md:gap-24">
          <AnimatedText text={paragraph} />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}



function ServicesSection() {
  return (
    <section id="services" className="bg-[#EDE2E2] px-4 py-16 text-black sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn as="h2" className="mb-12 text-center font-bayon text-[clamp(3.4rem,16vw,160px)] font-normal uppercase leading-[0.78] text-[#E33529] sm:mb-20 md:mb-28">
        Services
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="grid gap-4 border-t border-[rgba(12,12,12,0.15)] py-7 last:border-b sm:grid-cols-[0.8fr_1.8fr] sm:gap-10 sm:py-10 md:py-12"
          >
            <span className="font-bayon text-[clamp(3.4rem,18vw,140px)] font-normal leading-[0.78] text-[#E33529]">
              {service.number}
            </span>
            <div className="flex flex-col justify-center gap-3">
              <h3 className="font-serif text-[clamp(1.25rem,2.2vw,2.1rem)] font-bold normal-case text-black">
                {service.name}
              </h3>
              <p className="max-w-2xl font-serif text-[clamp(1rem,1.6vw,1.25rem)] font-normal leading-normal text-black opacity-70">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}



function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 bg-[#F3F3E9] px-4 py-16 text-black sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn as="h2" className="hero-heading mb-12 text-center text-[clamp(3.4rem,16vw,160px)] uppercase sm:mb-20 md:mb-28">
        Selected Work
      </FadeIn>
      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}



function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const imageDrift = useTransform(scrollYProgress, [0, 1], [34, -34]);
  const imageDriftReverse = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  function openProject() {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div ref={ref} className="relative mb-8 min-h-0 md:mb-0 md:h-[85vh] md:min-h-[760px]">
      <motion.article
        style={
          isDesktop
            ? { scale, top: `clamp(${96 + index * 28}px, 8vw, ${128 + index * 28}px)` }
            : undefined
        }
        role="link"
        tabIndex={0}
        onClick={openProject}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProject();
          }
        }}
        className={(isDesktop ? "sticky " : "relative ") + "cursor-pointer overflow-hidden rounded-[4px] bg-[#F3F3F3] p-4 text-black shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] outline-none transition-shadow duration-300 hover:shadow-[rgba(221,198,202,0.62)_-6px_8px_24px_0px] focus-visible:ring-2 focus-visible:ring-[#E33529] sm:p-6 md:p-8"}
      >
        <div className="mb-5 grid items-start gap-4 sm:grid-cols-[auto_1fr] sm:items-center md:mb-6 md:grid-cols-[0.8fr_0.75fr_1.35fr_auto] md:gap-6">
          <span className="font-bayon text-[clamp(3.4rem,18vw,140px)] font-normal leading-[0.78] text-[#E33529]">
            {project.number}
          </span>
          <span className="grid min-h-[44px] items-center font-serif text-base font-normal normal-case text-[#0000EE] opacity-100 sm:text-base">
            {project.category}
          </span>
          <h3 className="font-bayon text-[clamp(2.8rem,13vw,5.5rem)] font-normal uppercase leading-[0.78] tracking-normal text-black sm:col-span-2 md:col-span-1 md:text-[clamp(2.4rem,5vw,5.5rem)]">
            {project.name}
          </h3>
          <LiveProjectButton href={project.url} />
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-[40%_1fr] md:gap-5">
          <div className="grid gap-3 sm:gap-4 md:gap-5">
            <ProjectImage src={project.images[0]} alt={`${project.name} desktop screenshot`} className="h-[210px] sm:h-[clamp(130px,16vw,230px)]" motionY={imageDrift} />
            <ProjectImage src={project.images[1]} alt={`${project.name} mobile screenshot`} className="h-[240px] sm:h-[clamp(160px,22vw,340px)]" motionY={imageDriftReverse} />
          </div>
          <ProjectImage src={project.images[2]} alt={`${project.name} full website screenshot`} className="h-[300px] sm:h-[360px] md:h-full" motionY={imageDrift} />
        </div>
      </motion.article>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  className,
  motionY,
}: {
  src: string;
  alt: string;
  className: string;
  motionY?: MotionValue<number>;
}) {
  return (
    <motion.div
      whileHover={{ scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative overflow-hidden rounded-[4px] bg-[#EDE2E2] shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y: motionY }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-[115%] w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(244,206,211,0.28),transparent_35%,rgba(227,53,41,0.08))]" />
    </motion.div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F3F3E9] font-kanit text-black">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <footer id="contact" className="bg-[#F4CED3] px-4 py-20 text-center text-black sm:px-8 sm:py-24 md:px-10">
        <FadeIn className="mx-auto flex max-w-5xl flex-col items-center gap-10">
          <h2 className="hero-heading text-[clamp(3.4rem,16vw,140px)] uppercase">
            Let us build something considered
          </h2>
          <ContactButton />
        </FadeIn>
      </footer>
    </main>
  );
}

export default App;
