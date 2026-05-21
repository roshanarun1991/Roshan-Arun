import {jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }﻿import { useEffect, useMemo, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import {


  motion,
  useMotionValue,
  useScroll,
  useSpring,
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
const aiSeoAuditImage = new URL('./assets/sites/ai-seo-audit.svg', import.meta.url).href;
const aiSeoPricingImage = new URL('./assets/sites/ai-seo-pricing.svg', import.meta.url).href;
const aiSeoHeroImage = new URL('./assets/sites/ai-seo-hero.svg', import.meta.url).href;
const mammaOrderImage = new URL('./assets/sites/mamma-order.svg', import.meta.url).href;
const mammaAdminImage = new URL('./assets/sites/mamma-admin.svg', import.meta.url).href;
const aiBlogListImage = new URL('./assets/sites/ai-blog-list.svg', import.meta.url).href;
const aiBlogProjectsImage = new URL('./assets/sites/ai-blog-projects.svg', import.meta.url).href;
const stockholmAboutImage = new URL('./assets/sites/stockholm-about.svg', import.meta.url).href;
const stockholmContactImage = new URL('./assets/sites/stockholm-contact.svg', import.meta.url).href;

function websiteScreenshot(url, width, height) {
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
    details: ['Conversion-focused structure', 'Responsive visual design', 'Frontend motion direction'],
  },
  {
    number: '02',
    name: 'Visual Branding',
    description:
      'Distinctive identity systems, typography, color, and art direction that help brands feel clear, memorable, and ownable.',
    details: ['Logo and identity direction', 'Color and type systems', 'Brand usage guidance'],
  },
  {
    number: '03',
    name: 'Product Design',
    description:
      'Thoughtful interface design that turns complex products into intuitive, useful, and visually refined digital experiences.',
    details: ['UX flows and wireframes', 'Interface design systems', 'Prototype-ready screens'],
  },
  {
    number: '04',
    name: 'Brand Systems',
    description:
      'Reusable visual systems for websites, campaigns, and product surfaces so every detail feels consistent and intentional.',
    details: ['Reusable components', 'Launch-ready templates', 'Creative consistency checks'],
  },
  {
    number: '05',
    name: 'Motion & Interaction',
    description:
      'Smooth transitions, scroll rhythm, and micro-interactions that add craft without getting in the way of clarity.',
    details: ['Scroll-based moments', 'Hover and tap states', 'Motion timing guidelines'],
  },
];



const projects = [
  {
    number: '01',
    category: 'Local Brand',
    name: 'Mamma Bakery',
    url: 'https://mammabakery.se/',
    images: [mammaOrderImage, mammaAdminImage, websiteScreenshot('https://mammabakery.se/', 1680, 2400)],
  },
  {
    number: '02',
    category: 'Editorial Blog',
    name: 'The AI Blog',
    url: 'https://roshanarun1991.github.io/The.AI.Blog/#blog',
    images: [aiBlogListImage, aiBlogProjectsImage, websiteScreenshot('https://roshanarun1991.github.io/The.AI.Blog/', 1680, 2400)],
  },
  {
    number: '03',
    category: 'Studio Presence',
    name: 'Stockholm Designs',
    url: 'https://www.stockholmdesigns.com/',
    images: [stockholmAboutImage, stockholmContactImage, websiteScreenshot('https://www.stockholmdesigns.com/', 1680, 2400)],
  },
  {
    number: '04',
    category: 'AI Tool',
    name: 'AI SEO',
    url: 'https://ai-seo-91ee.onrender.com/',
    images: [aiSeoAuditImage, aiSeoPricingImage, aiSeoHeroImage],
  },
];
function useMediaQuery(query) {
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










function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}) {
  const MotionElement = useMemo(() => motion.create(as ), [as]) ;

  return (
    _jsx(MotionElement, {
      className: className,
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: '50px', amount: 0 },
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
      ...props,
 children: 
      children
    })
  );
}










function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  function handleMouseMove(event) {
    const rect = _optionalChain([ref, 'access', _ => _.current, 'optionalAccess', _2 => _2.getBoundingClientRect, 'call', _3 => _3()]);
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
    _jsx('div', {
      ref: ref,
      className: className,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: { transform, transition, willChange: 'transform' },
 children: 
      children
    })
  );
}

function ContactButton() {
  const [isOpening, setIsOpening] = useState(false);

  function handleClick() {
    setIsOpening(true);
    window.setTimeout(() => setIsOpening(false), 1200);
  }

  return (
    _jsxs(motion.a, {
      href: contactHref,
      onClick: handleClick,
      whileHover: { scale: 1.04, y: -2 },
      whileTap: { scale: 0.96 },
      className: "inline-flex min-h-[44px] items-center justify-center gap-2 px-0 py-0 text-sm font-medium uppercase leading-[14px] tracking-normal text-[#E33529] transition duration-200 hover:opacity-80 focus-visible:border-b focus-visible:border-[#E33529] focus-visible:outline-none"                  ,
 children: [
      _jsx(motion.span, { initial: { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.18 }, children: 
        isOpening ? 'Opening email...' : 'Contact Me'
      }, isOpening ? 'opening' : 'contact')
      , _jsx(motion.span, { 'aria-hidden': "true", animate: isOpening ? { x: [0, 4, 0], rotate: [0, 18, 0] } : { x: 0, rotate: 0 }, transition: { duration: 0.42 }, children: 
        _jsx(Send, { size: 18, strokeWidth: 2.3,} )
      })
    ]})
  );
}

function HeroSection() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    _jsxs('section', { className: "relative flex min-h-[100svh] flex-col overflow-x-clip bg-[#F4CED3] text-black md:h-screen"       , children: [
      _jsxs('div', { className: "relative z-20 w-full overflow-visible px-3 pt-8 sm:pt-8 md:pt-10"       , children: [
        _jsx(FadeIn, { as: "h1", delay: 0.15, y: 40, className: "hero-heading mx-auto w-full max-w-[96vw] whitespace-nowrap text-center text-[clamp(4.8rem,15.4vw,18rem)] font-normal uppercase tracking-normal"         , children: "Roshan Arun"

        })
        , _jsx(FadeIn, { as: "nav", delay: 0.28, y: 14, className: "mt-2 flex justify-center gap-x-6 font-kanit text-sm font-medium uppercase leading-[14px] tracking-normal text-[#E33529] sm:mt-3 sm:gap-x-8 md:mt-4"             , children: 
          navItems.map((item) => (
            _jsx('a', { href: item.href, className: "min-h-[44px] content-center transition duration-200 hover:opacity-70 focus-visible:border-b focus-visible:border-[#E33529] focus-visible:outline-none"       , children: 
              item.label
            }, item.href)
          ))
        })
      ]})

      , _jsx(FadeIn, { delay: 0.6, y: 30, children: 
        _jsx(Magnet, {
          padding: 150,
          strength: 3,
          activeTransition: "transform 0.3s ease-out"  ,
          inactiveTransition: "transform 0.6s ease-in-out"  ,
          className: "absolute left-1/2 top-[47%] z-10 w-[min(76vw,320px)] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"            ,
 children: 
          _jsx('img', {
            src: portraitUrl,
            alt: "3D portrait of Roshan Arun"    ,
            className: "h-auto w-full select-none object-contain drop-shadow-[rgba(221,198,202,0.55)_-14px_20px_34px]"    ,
            draggable: false,
            loading: "eager",}
          )
        })
      })

      , _jsxs('div', { className: "relative z-20 mt-auto grid gap-5 px-4 pb-6 sm:grid-cols-[minmax(220px,300px)_auto] sm:items-end sm:justify-between sm:px-6 sm:pb-8 md:px-10 md:pb-10"             , children: [
        _jsx(FadeIn, { as: "p", delay: 0.35, y: 20, className: "max-w-[240px] font-serif text-[clamp(1rem,1.4vw,1.5rem)] font-normal normal-case leading-normal tracking-normal text-black md:max-w-[300px]"        , children: "brand and web design specialist creating digital experiences across web, branding, and product design"

        })
        , _jsx(FadeIn, { delay: 0.5, y: 20, className: "sm:justify-self-end", children: 
          _jsx(ContactButton, {} )
        })
      ]})
    ]})
  );
}



function MarqueeSection() {
  const sectionRef = useRef(null);
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
    _jsx('section', { ref: sectionRef, className: "overflow-hidden bg-[#F3F3E9] pt-16 pb-8 sm:pt-32 md:pt-40 md:pb-10"      , 'aria-label': "Animated project previews"  , children: 
      _jsxs('div', { className: "flex flex-col gap-3"  , children: [
        _jsx(MarqueeRow, { images: rowOne, x: offset - 200,} )
        , _jsx(MarqueeRow, { images: rowTwo, x: -(offset - 200),} )
      ]})
    })
  );
}

function MarqueeRow({ images, x }) {
  const repeated = [...images, ...images, ...images];

  return (
    _jsx('div', { className: "overflow-visible", children: 
      _jsx('div', {
        className: "flex w-max gap-3"  ,
        style: { transform: `translate3d(${x}px, 0, 0)`, willChange: 'transform' },
 children: 
        repeated.map((src, index) => (
          _jsx('img', {

            src: src,
            alt: "Animated website preview"  ,
            loading: "lazy",
            className: "h-[180px] w-[280px] flex-none rounded-[4px] object-cover shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"         ,}, `${src}-${index}`
          )
        ))
      })
    })
  );
}

function AnimatedText({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const [activeWord, setActiveWord] = useState(null);
  const words = text.split(' ');
  const total = words.reduce((sum, word) => sum + Array.from(word).length, 0);
  let characterIndex = 0;

  return (
    _jsx('p', {
      ref: ref,
      onPointerLeave: () => setActiveWord(null),
      className: "max-w-[min(680px,92vw)] text-center font-serif text-[clamp(1rem,2vw,1.35rem)] font-normal leading-normal text-black"      ,
 children: 
      words.map((word, wordIndex) => {
        const letters = Array.from(word);
        const startIndex = characterIndex;
        const isActive = activeWord !== null && Math.abs(activeWord - wordIndex) <= 1;
        characterIndex += letters.length;

        return (
          _jsxs('span', { className: "inline whitespace-normal" , onPointerEnter: () => setActiveWord(wordIndex), children: [
            _jsx('span', { className: "inline-block whitespace-nowrap transition-transform duration-300"   , style: { transform: isActive ? 'translateY(-1px)' : 'translateY(0)' }, children: 
              letters.map((char, letterIndex) => (
                _jsx(AnimatedCharacter, {

                  char: char,
                  index: startIndex + letterIndex,
                  total: total,
                  progress: scrollYProgress,
                  active: isActive,}, `${word}-${wordIndex}-${letterIndex}`
                )
              ))
            })
            , wordIndex < words.length - 1 ? ' ' : null
          ]}, `${word}-${wordIndex}`)
        );
      })
    })
  );
}

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
  active = false,
}





) {
  const start = index / total;
  const end = Math.min(1, start + 0.16);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    _jsxs('span', { className: "relative inline-block" , children: [
      _jsx('span', { className: "invisible", children: displayChar})
      , _jsx(motion.span, {
        className: "absolute inset-0" ,
        style: { opacity },
        animate: {
          color: active ? '#E33529' : '#000000',
          textShadow: active ? '0 0 18px rgba(227,53,41,0.22)' : '0 0 0 rgba(227,53,41,0)',
        },
        transition: { duration: 0.18 },
 children: 
        displayChar
      })
    ]})
  );
}

function CursorBasketball() {
  const stageRef = useRef(null);
  const sizeRef = useRef(112);
  const activeRef = useRef(false);
  const stateRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, rotation: 0, impact: 0, waiting: true });
  const [ballSize, setBallSize] = useState(112);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const shadowX = useMotionValue(0);
  const shadowY = useMotionValue(0);
  const shadowWidth = useMotionValue(96);
  const shadowScale = useMotionValue(1);
  const shadowOpacity = useMotionValue(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      opacity.set(0);
      shadowOpacity.set(0);
      return undefined;
    }

    let frame = 0;
    let lastTime = performance.now();
    let restartTimer;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const clearRestart = () => {
      if (restartTimer) {
        window.clearTimeout(restartTimer);
        restartTimer = undefined;
      }
    };

    const getBallSize = () => {
      const width = _nullishCoalesce(_optionalChain([stageRef, 'access', _4 => _4.current, 'optionalAccess', _5 => _5.getBoundingClientRect, 'call', _6 => _6(), 'access', _7 => _7.width]), () => ( window.innerWidth));
      if (width < 640) return 72;
      if (width < 1024) return 92;
      return 112;
    };

    const getFloor = (height, size) => height - size - Math.max(42, height * 0.075);

    const resetBall = () => {
      const stage = stageRef.current;
      if (!stage) return;
      clearRestart();
      const rect = stage.getBoundingClientRect();
      const size = getBallSize();
      sizeRef.current = size;
      setBallSize(size);
      const state = stateRef.current;
      state.x = -size * 1.45;
      state.y = Math.max(24, rect.height * 0.08);
      state.vx = clamp(rect.width * 0.36, 430, 780);
      state.vy = clamp(rect.height * 0.13, 90, 180);
      state.rotation = -70;
      state.impact = 0;
      state.waiting = false;
      lastTime = performance.now();
      x.set(state.x);
      y.set(state.y);
      rotate.set(state.rotation);
      opacity.set(0);
      scaleX.set(1);
      scaleY.set(1);
      shadowOpacity.set(0);
    };

    const pauseBall = () => {
      clearRestart();
      activeRef.current = false;
      stateRef.current.waiting = true;
      opacity.set(0);
      shadowOpacity.set(0);
    };

    const startBallLoop = () => {
      activeRef.current = true;
      resetBall();
    };

    const syncSize = () => {
      const nextSize = getBallSize();
      sizeRef.current = nextSize;
      setBallSize(nextSize);
      if (activeRef.current) resetBall();
    };

    const step = (time) => {
      const stage = stageRef.current;
      if (!stage) {
        frame = window.requestAnimationFrame(step);
        return;
      }

      if (!activeRef.current) {
        lastTime = time;
        frame = window.requestAnimationFrame(step);
        return;
      }

      const rect = stage.getBoundingClientRect();
      const size = sizeRef.current;
      const state = stateRef.current;
      const dt = clamp((time - lastTime) / 1000, 0.001, 0.032);
      lastTime = time;

      if (state.waiting) {
        frame = window.requestAnimationFrame(step);
        return;
      }

      const floor = getFloor(rect.height, size);
      const gravity = clamp(rect.height * 2.35, 1500, 2450);
      const restitution = 0.62;
      const bounceFriction = 0.94;
      const rollingFriction = 0.985;

      state.vy += gravity * dt;
      state.x += state.vx * dt;
      state.y += state.vy * dt;

      if (state.y >= floor) {
        state.y = floor;
        if (state.vy > 0) {
          const hitSpeed = state.vy;
          state.vx *= bounceFriction;
          if (hitSpeed > 190) {
            state.vy = -hitSpeed * restitution;
            state.impact = clamp(hitSpeed / 1550, 0.16, 1);
          } else {
            state.vy = 0;
          }
        }
        state.vx *= Math.pow(rollingFriction, dt * 60);
      }

      state.rotation += (state.vx * dt / Math.max(size * 0.48, 1)) * 57.2958;
      state.impact = Math.max(0, state.impact - dt * 4.8);

      const distanceFromFloor = Math.max(0, floor - state.y);
      const floorCloseness = clamp(1 - distanceFromFloor / Math.max(rect.height * 0.45, 1), 0, 1);
      const fadeIn = clamp((state.x + size * 1.45) / (size * 1.5), 0, 1);
      const fadeOut = clamp((rect.width + size * 1.15 - state.x) / (size * 1.85), 0, 1);
      const alpha = Math.min(fadeIn, fadeOut);
      const impact = state.impact;

      x.set(state.x);
      y.set(state.y);
      rotate.set(state.rotation);
      opacity.set(alpha);
      scaleX.set(1 + impact * 0.13);
      scaleY.set(1 - impact * 0.18);
      shadowX.set(state.x + size / 2);
      shadowY.set(floor + size - 5);
      shadowWidth.set(size * (0.62 + floorCloseness * 0.54 + impact * 0.18));
      shadowScale.set(0.72 + floorCloseness * 0.5 + impact * 0.15);
      shadowOpacity.set(alpha * (0.07 + floorCloseness * 0.26 + impact * 0.13));

      if (state.x > rect.width + size * 1.6) {
        state.waiting = true;
        opacity.set(0);
        shadowOpacity.set(0);
        clearRestart();
        restartTimer = window.setTimeout(() => {
          if (activeRef.current) resetBall();
        }, 700);
      }

      frame = window.requestAnimationFrame(step);
    };

    const resizeObserver = new ResizeObserver(syncSize);
    if (stageRef.current) resizeObserver.observe(stageRef.current);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.2;
        if (visible && !activeRef.current) {
          startBallLoop();
        }
        if (!visible && activeRef.current) {
          pauseBall();
        }
      },
      { threshold: [0, 0.2, 0.45] },
    );

    if (stageRef.current) observer.observe(stageRef.current);

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible' && activeRef.current) resetBall();
    };

    window.addEventListener('resize', syncSize);
    document.addEventListener('visibilitychange', onVisibilityChange);
    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      observer.disconnect();
      window.removeEventListener('resize', syncSize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearRestart();
    };
  }, [opacity, rotate, scaleX, scaleY, shadowOpacity, shadowScale, shadowWidth, shadowX, shadowY, x, y]);

  return (
    _jsxs('div', { ref: stageRef, className: "pointer-events-none absolute inset-0 z-0 overflow-hidden"    , 'aria-hidden': "true", children: [
      _jsx(motion.div, {
        className: "absolute left-0 top-0 h-4 -translate-x-1/2 rounded-full bg-[#9b2b24]/20 blur-md"       ,
        style: { x: shadowX, y: shadowY, width: shadowWidth, scaleX: shadowScale, opacity: shadowOpacity },}
      )
      , _jsx(motion.div, {
        className: "absolute left-0 top-0 origin-bottom"   ,
        style: { x, y, width: ballSize, height: ballSize, opacity, scaleX, scaleY },
 children: 
        _jsxs(motion.svg, {
          viewBox: "0 0 140 140"   ,
          className: "h-full w-full drop-shadow-[rgba(99,30,24,0.24)_-8px_16px_22px]"  ,
          style: { rotate },
 children: [
          _jsxs('defs', { children: [
            _jsxs('radialGradient', { id: "basketball-gloss", cx: "35%", cy: "24%", r: "78%", children: [
              _jsx('stop', { offset: "0%", stopColor: "#FFFFFF",} )
              , _jsx('stop', { offset: "24%", stopColor: "#FBE9E7",} )
              , _jsx('stop', { offset: "54%", stopColor: "#E33529",} )
              , _jsx('stop', { offset: "100%", stopColor: "#8F1711",} )
            ]})
            , _jsxs('linearGradient', { id: "basketball-shade", x1: "22", y1: "18", x2: "116", y2: "122", gradientUnits: "userSpaceOnUse", children: [
              _jsx('stop', { offset: "0%", stopColor: "#FFFFFF", stopOpacity: "0.45",} )
              , _jsx('stop', { offset: "52%", stopColor: "#FFFFFF", stopOpacity: "0",} )
              , _jsx('stop', { offset: "100%", stopColor: "#000000", stopOpacity: "0.2",} )
            ]})
          ]})
          , _jsx('circle', { cx: "70", cy: "70", r: "58", fill: "url(#basketball-gloss)", stroke: "#C51F18", strokeWidth: "7",} )
          , _jsx('circle', { cx: "70", cy: "70", r: "56", fill: "url(#basketball-shade)", opacity: "0.9",} )
          , _jsx('path', { d: "M16 72h108" , stroke: "#FFFFFF", strokeWidth: "8", strokeLinecap: "round", opacity: "0.95",} )
          , _jsx('path', { d: "M70 13c-18 25-18 88 0 114"     , stroke: "#FFFFFF", strokeWidth: "8", strokeLinecap: "round", fill: "none", opacity: "0.95",} )
          , _jsx('path', { d: "M36 26c30 21 40 67 19 97"      , stroke: "#B91D16", strokeWidth: "5.5", strokeLinecap: "round", fill: "none", opacity: "0.86",} )
          , _jsx('path', { d: "M104 26c-30 21-40 67-19 97"    , stroke: "#B91D16", strokeWidth: "5.5", strokeLinecap: "round", fill: "none", opacity: "0.86",} )
          , _jsx('path', { d: "M27 32c18-16 49-22 78-9"   , stroke: "#FFFFFF", strokeWidth: "3", strokeLinecap: "round", fill: "none", opacity: "0.64",} )
          , _jsx('circle', { cx: "49", cy: "42", r: "12", fill: "#FFFFFF", opacity: "0.52",} )
        ]})
      })
    ]})
  );
}

function AboutSection() {
  const paragraph = "I am Roshan Arun, a designer based in Stockholm with experience creating digital experiences across web, branding, and product design. I begin with observation before assumptions, looking at a brand through the people using it first, then shaping thoughtful experiences built on clarity, intention, and experimentation.";

  return (
    _jsxs('section', { id: "about", className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#F4CED3] px-4 py-20 text-black sm:px-8 md:min-h-screen md:px-10"            , children: [
      _jsx(CursorBasketball, {} )

      , _jsxs('div', { className: "relative z-10 flex w-full flex-col items-center gap-8 sm:gap-14 md:gap-16"        , children: [
        _jsx(FadeIn, { as: "h2", delay: 0, y: 40, className: "hero-heading text-center text-[clamp(3.4rem,16vw,160px)] font-normal uppercase tracking-normal"     , children: "About me"

        })
        , _jsxs('div', { className: "flex flex-col items-center gap-10 sm:gap-20 md:gap-24"     , children: [
          _jsx(AnimatedText, { text: paragraph,} )
          , _jsx(ContactButton, {} )
        ]})
      ]})
    ]})
  );
}



function ServiceCard({ service, index, active, onActivate }) {
  return (
    _jsx(FadeIn, { delay: index * 0.1, children: 
      _jsxs(motion.button, {
        type: "button",
        layout: true,
        onClick: onActivate,
        onMouseEnter: onActivate,
        onFocus: onActivate,
        whileHover: { y: -4 },
        whileTap: { scale: 0.99 },
        className: "group grid w-full gap-4 border-t border-[rgba(12,12,12,0.15)] py-7 text-left outline-none last:border-b sm:grid-cols-[0.8fr_1.8fr] sm:gap-10 sm:py-10 md:py-12"             ,
 children: [
        _jsx('span', { className: "font-bayon text-[clamp(3.4rem,18vw,140px)] font-normal leading-[0.78] text-[#E33529] transition duration-300 group-hover:translate-x-2"       , children: 
          service.number
        })
        , _jsxs('span', { className: "flex flex-col justify-center gap-3"   , children: [
          _jsxs('span', { className: "flex items-center justify-between gap-6"   , children: [
            _jsx('span', { className: "font-serif text-[clamp(1.25rem,2.2vw,2.1rem)] font-bold normal-case text-black"    , children: 
              service.name
            })
            , _jsx('span', { className: "hidden font-kanit text-sm font-medium uppercase leading-[14px] text-[#E33529] opacity-0 transition duration-300 group-hover:opacity-100 sm:inline"           , children: 
              active ? 'Open' : 'View'
            })
          ]})
          , _jsx('span', { className: "max-w-2xl font-serif text-[clamp(1rem,1.6vw,1.25rem)] font-normal leading-normal text-black opacity-70"      , children: 
            service.description
          })
          , _jsx(motion.span, {
            initial: false,
            animate: { height: active ? 'auto' : 0, opacity: active ? 1 : 0 },
            transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
            className: "overflow-hidden",
 children: 
            _jsx('span', { className: "mt-4 grid gap-2 sm:grid-cols-3"   , children: 
              service.details.map((detail) => (
                _jsx('span', { className: "rounded-[4px] bg-[#F4CED3] px-3 py-3 font-kanit text-sm font-medium uppercase leading-[14px] text-[#E33529]"         , children: 
                  detail
                }, detail)
              ))
            })
          })
        ]})
      ]})
    })
  );
}

function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    _jsxs('section', { id: "services", className: "bg-[#EDE2E2] px-4 py-16 text-black sm:px-8 sm:py-24 md:px-10 md:py-32"       , children: [
      _jsx(FadeIn, { as: "h2", className: "mb-12 text-center font-bayon text-[clamp(3.4rem,16vw,160px)] font-normal uppercase leading-[0.78] text-[#E33529] sm:mb-20 md:mb-28"         , children: "Services"

      })
      , _jsx('div', { className: "mx-auto max-w-5xl" , children: 
        services.map((service, index) => (
          _jsx(ServiceCard, {

            service: service,
            index: index,
            active: activeService === index,
            onActivate: () => setActiveService(index),}, service.number
          )
        ))
      })
    ]})
  );
}



function ProjectsSection() {
  return (
    _jsxs('section', { id: "projects", className: "relative z-10 bg-[#F3F3E9] px-4 py-16 text-black sm:px-8 sm:py-24 md:px-10 md:py-32"         , children: [
      _jsx(FadeIn, { as: "h2", className: "hero-heading mb-12 text-center text-[clamp(3.4rem,16vw,160px)] uppercase sm:mb-20 md:mb-28"      , children: "Selected Work"

      })
      , _jsx('div', { className: "mx-auto max-w-7xl" , children: 
        projects.map((project, index) => (
          _jsx(ProjectCard, { project: project, index: index, totalCards: projects.length,}, project.number )
        ))
      })
    ]})
  );
}



function ProjectCard({
  project,
  index,
  totalCards,
}



) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const imageDrift = useTransform(scrollYProgress, [0, 1], [34, -34]);
  const imageDriftReverse = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const hoverTargetX = useMotionValue(0);
  const hoverTargetY = useMotionValue(0);
  const titleTargetX = useMotionValue(0);
  const titleTargetY = useMotionValue(0);
  const titleX = useSpring(titleTargetX, { stiffness: 120, damping: 18, mass: 0.5 });
  const titleY = useSpring(titleTargetY, { stiffness: 120, damping: 18, mass: 0.5 });
  const hoverX = useSpring(hoverTargetX, { stiffness: 90, damping: 20, mass: 0.7 });
  const hoverY = useSpring(hoverTargetY, { stiffness: 90, damping: 20, mass: 0.7 });
  const hoverXReverse = useTransform(hoverX, (value) => value * -0.7);
  const hoverYReverse = useTransform(hoverY, (value) => value * -0.5);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpeningProject, setIsOpeningProject] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isMamma = project.name === 'Mamma Bakery';
  const isAiBlog = project.name === 'The AI Blog';
  const isStockholm = project.name === 'Stockholm Designs';
  const isAiSeo = project.name === 'AI SEO';
  const useFullFrameThumbnails = isMamma || isAiBlog || isStockholm || isAiSeo;

  function openProject() {
    if (isOpeningProject) return;
    setIsOpeningProject(true);
    const nextWindow = window.open('about:blank', '_blank');
    if (nextWindow) nextWindow.opener = null;
    window.setTimeout(() => {
      if (nextWindow) {
        nextWindow.location.href = project.url;
      } else {
        window.open(project.url, '_blank', 'noopener,noreferrer');
      }
      setIsOpeningProject(false);
    }, 280);
  }

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 28;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 22;
    hoverTargetX.set(x);
    hoverTargetY.set(y);
    titleTargetX.set(x * 0.62);
    titleTargetY.set(y * 0.5);
  }

  function handlePointerLeave() {
    setIsHovered(false);
    hoverTargetX.set(0);
    hoverTargetY.set(0);
    titleTargetX.set(0);
    titleTargetY.set(0);
  }

  return (
    _jsx('div', { ref: ref, className: "relative mb-8 min-h-0 md:mb-0 md:h-[85vh] md:min-h-[760px]"     , children: 
      _jsxs(motion.article, {
        style: 
          isDesktop
            ? { scale, top: `clamp(${96 + index * 28}px, 8vw, ${128 + index * 28}px)` }
            : undefined
        ,
        role: "link",
        tabIndex: 0,
        onClick: openProject,
        onPointerMove: handlePointerMove,
        onPointerEnter: () => setIsHovered(true),
        onPointerLeave: handlePointerLeave,
        onKeyDown: (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProject();
          }
        },
        className: (isDesktop ? "sticky " : "relative ") + "group/project cursor-pointer overflow-hidden rounded-[4px] bg-[#F3F3F3] p-4 text-black shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] outline-none transition-shadow duration-300 hover:shadow-[rgba(221,198,202,0.62)_-6px_8px_24px_0px] focus-visible:ring-2 focus-visible:ring-[#E33529] sm:p-6 md:p-8",
 children: [
        _jsxs('div', { className: "mb-5 grid items-start gap-4 sm:grid-cols-[auto_1fr] sm:items-center md:mb-6 md:gap-8"       , children: [
          _jsx(motion.span, { animate: isHovered ? { x: 6 } : { x: 0 }, transition: { duration: 0.28 }, className: "font-bayon text-[clamp(3.4rem,18vw,140px)] font-normal leading-[0.78] text-[#E33529]"    , children: 
            project.number
          })
          , _jsx(motion.h3, {
            style: { x: titleX, y: titleY },
            animate: { color: isHovered ? '#E33529' : '#000000' },
            transition: { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] },
            className: "font-bayon text-[clamp(2.8rem,13vw,5.5rem)] font-normal uppercase leading-[0.78] tracking-normal md:text-[clamp(2.4rem,5vw,5.5rem)]"      ,
 children: 
            project.name
          })
        ]})

        , _jsx(motion.div, {
          'aria-hidden': "true",
          initial: false,
          animate: { opacity: isOpeningProject ? 1 : 0, scale: isOpeningProject ? 1 : 0.92 },
          transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] },
          className: "pointer-events-none absolute inset-0 z-20 grid place-items-center bg-[#F4CED3]/80 backdrop-blur-sm"       ,
 children: 
          _jsx('span', { className: "font-bayon text-[clamp(3rem,12vw,9rem)] uppercase leading-[0.78] text-[#E33529]"    , children: "Opening"

          })
        })

        , _jsxs('div', { className: "grid gap-3 sm:gap-4 md:grid-cols-[40%_1fr] md:items-start md:gap-5"     , children: [
          _jsxs('div', { className: useFullFrameThumbnails ? "grid content-start gap-3 sm:gap-4 md:gap-4" : "grid gap-3 sm:gap-4 md:gap-5", children: [
            _jsx(ProjectImage, { src: project.images[0], alt: `${project.name} desktop screenshot`, className: useFullFrameThumbnails ? "aspect-[16/9] h-auto" : "h-[210px] sm:h-[clamp(130px,16vw,230px)]", motionY: useFullFrameThumbnails ? undefined : imageDrift, motionX: hoverX, fit: useFullFrameThumbnails ? 'contain-soft' : 'cover',} )
            , _jsx(ProjectImage, { src: project.images[1], alt: `${project.name} mobile screenshot`, className: useFullFrameThumbnails ? "aspect-[16/9] h-auto" : "h-[240px] sm:h-[clamp(160px,22vw,340px)]", motionY: useFullFrameThumbnails ? undefined : imageDriftReverse, motionX: hoverXReverse, fit: useFullFrameThumbnails ? 'contain-soft' : 'cover',} )
          ]})
          , _jsx(ProjectBrowserPreview, { project: project, motionX: hoverYReverse, isActive: isHovered,} )
        ]})
      ]})
    })
  );
}


function ProjectBrowserPreview({
  project,
  motionX,
  isActive,
}



) {
  const previewClass =
    project.name === 'AI SEO'
      ? 'project-browser-image--contain'
      : project.name === 'The AI Blog'
        ? 'project-browser-image--blog'
        : '';

  return (
    _jsxs(motion.div, {
      whileHover: { scale: 0.992 },
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
      className: "project-browser-preview relative flex h-[320px] flex-col overflow-hidden rounded-[4px] bg-[#F3F0EF] shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] sm:h-[390px] md:h-[clamp(420px,47vw,560px)]"          ,
 children: [
      _jsxs('div', { className: "flex min-h-[34px] items-center justify-between border-b border-[#E33529]/15 bg-[#F3F3E9]/92 px-3 sm:min-h-[38px] sm:px-4"         , children: [
        _jsxs('div', { className: "flex items-center gap-1.5"  , 'aria-hidden': "true", children: [
          _jsx('span', { className: "h-2.5 w-2.5 rounded-full bg-[#E33529]"   ,} )
          , _jsx('span', { className: "h-2.5 w-2.5 rounded-full bg-[#F0B5BE]"   ,} )
          , _jsx('span', { className: "h-2.5 w-2.5 rounded-full bg-[#854720]/35"   ,} )
        ]})
        , _jsx('span', { className: "max-w-[58%] truncate font-serif text-sm text-black/55 sm:max-w-[64%]"     , children: 
          project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
        })
        , _jsx(motion.span, {
          animate: isActive ? { x: 2, opacity: 1 } : { x: 0, opacity: 0.65 },
          className: "font-bayon text-2xl leading-none text-[#E33529]"   ,
 children: "OPEN"

        })
      ]})

      , _jsxs('div', { className: "relative flex-1 overflow-hidden bg-[#EDE2E2]"   , children: [
        _jsx(motion.img, {
          src: project.images[2],
          alt: project.name + ' scrolling website preview',
          loading: "lazy",
          style: { x: motionX },
          className: ('project-browser-image ' + previewClass + ' w-full').trim(),}
        )
        , _jsx('div', { className: "pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F3F0EF]/90 to-transparent"       ,} )
        , _jsx('div', { className: "pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F3F0EF]/95 to-transparent"       ,} )
        , _jsx(motion.div, {
          className: "pointer-events-none absolute right-3 top-12 h-16 w-[3px] rounded-full bg-[#E33529]"       ,
          animate: isActive ? { y: [0, 180, 0], opacity: [0.45, 0.9, 0.45] } : { y: 0, opacity: 0.32 },
          transition: { duration: 5.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] },}
        )
      ]})
    ]})
  );
}

function ProjectImage({
  src,
  alt,
  className,
  motionY,
  motionX,
  fit = 'cover',
}






) {
  const imgClassName =
    fit === 'contain'
      ? 'h-full w-full object-contain p-3 sm:p-4'
      : fit === 'contain-soft'
        ? 'project-thumb-contain-motion h-full w-full object-contain'
        : fit === 'top-left'
        ? 'h-[108%] w-full object-cover object-left-top'
        : 'h-[115%] w-full object-cover';

  return (
    _jsxs(motion.div, {
      whileHover: { scale: 0.985 },
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
      className: 'relative overflow-hidden rounded-[4px] bg-[#EDE2E2] shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px] ' + className,
 children: [
      _jsx(motion.img, {
        src: src,
        alt: alt,
        loading: "lazy",
        style: { y: motionY, x: motionX },
        whileHover: { scale: fit === 'contain' || fit === 'contain-soft' ? 1.025 : 1.08 },
        transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
        className: imgClassName,}
      )
      , _jsx('div', { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(244,206,211,0.28),transparent_35%,rgba(227,53,41,0.08))] opacity-80 transition duration-300 group-hover/project:opacity-100"       ,} )
    ]})
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.35 });

  return (
    _jsx(motion.div, {
      'aria-hidden': "true",
      className: "fixed left-0 top-0 z-[80] h-[3px] w-full origin-left bg-[#E33529]"       ,
      style: { scaleX },}
    )
  );
}

function CursorSpotlight() {
  const targetX = useMotionValue(-320);
  const targetY = useMotionValue(-320);
  const x = useSpring(targetX, { stiffness: 90, damping: 24, mass: 0.8 });
  const y = useSpring(targetY, { stiffness: 90, damping: 24, mass: 0.8 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      targetX.set(event.clientX - 160);
      targetY.set(event.clientY - 160);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [targetX, targetY]);

  return (
    _jsx(motion.div, {
      'aria-hidden': "true",
      className: "pointer-events-none fixed left-0 top-0 z-[60] h-80 w-80 rounded-full opacity-45 mix-blend-multiply blur-3xl"          ,
      style: {
        x,
        y,
        background: 'radial-gradient(circle, rgba(227,53,41,0.24) 0%, rgba(255,255,255,0.18) 42%, rgba(244,206,211,0) 72%)',
      },}
    )
  );
}

function App() {
  return (
    _jsxs('main', { className: "min-h-screen overflow-x-clip bg-[#F3F3E9] font-kanit text-black"    , children: [
      _jsx(ScrollProgress, {} )
      , _jsx(CursorSpotlight, {} )
      , _jsx(HeroSection, {} )
      , _jsx(MarqueeSection, {} )
      , _jsx(AboutSection, {} )
      , _jsx(ServicesSection, {} )
      , _jsx(ProjectsSection, {} )
      , _jsx('footer', { id: "contact", className: "relative overflow-hidden bg-[#F4CED3] px-4 py-20 text-center text-black sm:px-8 sm:py-24 md:px-10"         , children: 
        _jsxs(FadeIn, { className: "mx-auto flex max-w-5xl flex-col items-center gap-10"     , children: [
          _jsx(motion.p, {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.4 },
            transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
            className: "font-kanit text-sm font-medium uppercase leading-[14px] text-[#E33529]"     ,
 children: "Available for thoughtful projects"

          })
          , _jsx(motion.h2, {
            initial: { opacity: 0, y: 42, scale: 0.98 },
            whileInView: { opacity: 1, y: 0, scale: 1 },
            viewport: { once: true, amount: 0.35 },
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            className: "hero-heading text-[clamp(3.4rem,16vw,140px)] uppercase"  ,
 children: "Let us build something considered"

          })
          , _jsx(motion.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.45 },
            transition: { duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] },
            className: "rounded-[4px] bg-[#F3F3E9]/70 px-5 py-2 shadow-[rgba(221,198,202,0.4)_-3px_4px_14px_0px]"    ,
 children: 
            _jsx(ContactButton, {} )
          })
        ]})
      })
    ]})
  );
}

export default App;
