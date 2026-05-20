const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const body = document.body;
const loaderNumber = document.querySelector(".loader-number");
const loaderLine = document.querySelector(".loader-line i");

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const lerp = (from, to, amount) => from + (to - from) * amount;
const prefersFinePointer = window.matchMedia("(pointer: fine)").matches;

let loadTarget = 0;
let loadValue = 0;
let loadComplete = false;

function finishLoading() {
  loadComplete = true;
  loadTarget = 100;
}

window.addEventListener("load", finishLoading, { once: true });
window.setTimeout(finishLoading, 1800);

function tickLoader() {
  if (!loadComplete) {
    loadTarget = Math.min(94, loadTarget + 1.2 + Math.random() * 3.5);
  }

  loadValue = lerp(loadValue, loadTarget, loadComplete ? 0.18 : 0.08);
  const rounded = Math.min(100, Math.round(loadValue));
  root.style.setProperty("--load-progress", (rounded / 100).toFixed(3));
  if (loaderNumber) loaderNumber.textContent = String(rounded);
  if (loaderLine) loaderLine.style.width = `${rounded}%`;

  if (loadComplete && rounded >= 99) {
    root.style.setProperty("--load-progress", "1");
    if (loaderNumber) loaderNumber.textContent = "100";
    window.setTimeout(() => body.classList.add("is-loaded"), 280);
    return;
  }

  requestAnimationFrame(tickLoader);
}

tickLoader();

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

if (!window.location.hash) {
  window.scrollTo(0, 0);
}

const nameChars = [];
document.querySelectorAll(".name-word").forEach((word, wordIndex) => {
  const text = word.textContent.trim();
  word.textContent = "";

  [...text].forEach((letter, index) => {
    const char = document.createElement("span");
    char.className = "name-char";
    char.textContent = letter;
    char.style.setProperty("--char-scale", "1");
    char.style.setProperty("--char-y", "0px");
    char.style.setProperty("--char-x", "0px");
    char.style.setProperty("--char-rotate", "0deg");
    word.appendChild(char);
    nameChars.push({ el: char, index, wordIndex });
  });
});

const revealItems = Array.from(document.querySelectorAll(".reveal"));
if (reduceMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 4) * 55}ms`;
    revealObserver.observe(item);
  });
}

const state = {
  targetMouseX: 0,
  targetMouseY: 0,
  mouseX: 0,
  mouseY: 0,
  pointerX: window.innerWidth / 2,
  pointerY: window.innerHeight / 2,
  targetScroll: window.scrollY,
  smoothScroll: window.scrollY,
};

const hero = document.querySelector(".hero");
const heroName = document.querySelector(".hero-name");
const heroPreview = document.querySelector(".hero-preview");
const wordLeft = document.querySelector('[data-word="left"]');
const wordRight = document.querySelector('[data-word="right"]');
const workSection = document.querySelector(".work-section");
const workTrack = document.querySelector(".work-track");
const workCards = Array.from(document.querySelectorAll(".work-card"));
const ambientShapes = Array.from(document.querySelectorAll(".ambient"));

function handlePointerMove(event) {
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  state.targetMouseX = (event.clientX / window.innerWidth - 0.5) * 74;
  state.targetMouseY = (event.clientY / window.innerHeight - 0.5) * 56;
}

function settlePointer() {
  state.targetMouseX = 0;
  state.targetMouseY = 0;
}

window.addEventListener("pointermove", handlePointerMove, { passive: true });
window.addEventListener("pointerleave", settlePointer, { passive: true });
window.addEventListener("scroll", () => {
  state.targetScroll = window.scrollY;
}, { passive: true });
window.addEventListener("resize", () => {
  state.pointerX = window.innerWidth / 2;
  state.pointerY = window.innerHeight / 2;
}, { passive: true });

function heroProgress() {
  if (!hero) return 0;
  const rect = hero.getBoundingClientRect();
  const start = state.smoothScroll + rect.top;
  return clamp((state.smoothScroll - start) / Math.max(1, window.innerHeight * 0.95));
}

function sectionProgress(section) {
  if (!section) return 0;
  const rect = section.getBoundingClientRect();
  const start = state.smoothScroll + rect.top;
  const distance = Math.max(1, section.offsetHeight - window.innerHeight);
  return clamp((state.smoothScroll - start) / distance);
}

function updateHeroMotion(progress) {
  root.style.setProperty("--hero-progress", progress.toFixed(3));
  root.style.setProperty("--mx", `${state.mouseX.toFixed(2)}px`);
  root.style.setProperty("--my", `${state.mouseY.toFixed(2)}px`);

  const sideTravel = Math.min(window.innerWidth * 0.18, 290);
  const mouseTravel = prefersFinePointer ? state.mouseX : 0;

  if (heroName) {
    heroName.style.setProperty("--name-x", `${(mouseTravel * 0.16).toFixed(2)}px`);
    heroName.style.setProperty("--name-y", `${(-24 * progress + state.mouseY * 0.1).toFixed(2)}px`);
    heroName.style.setProperty("--name-scale", (1 + progress * 0.045 + Math.abs(state.mouseX) * 0.00065).toFixed(4));
  }

  if (wordLeft) wordLeft.style.setProperty("--word-x", `${(-sideTravel * progress + mouseTravel * 0.42).toFixed(2)}px`);
  if (wordRight) wordRight.style.setProperty("--word-x", `${(sideTravel * progress + mouseTravel * 0.26).toFixed(2)}px`);

  if (heroPreview) {
    heroPreview.style.setProperty("--preview-x", `${(state.mouseX * 0.75 + progress * 42).toFixed(2)}px`);
    heroPreview.style.setProperty("--preview-y", `${(state.mouseY * 0.48 - progress * 34).toFixed(2)}px`);
    heroPreview.style.setProperty("--preview-r", `${(-1.2 + state.mouseX * 0.035).toFixed(2)}deg`);
    heroPreview.style.setProperty("--preview-s", (1 + progress * 0.075).toFixed(3));
  }

  nameChars.forEach(({ el, index, wordIndex }) => {
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const pointerDistance = Math.abs(center - state.pointerX);
    const proximity = prefersFinePointer ? clamp(1 - pointerDistance / Math.max(180, window.innerWidth * 0.18)) : 0;
    const phase = progress * 4.4 + index * 0.62 + wordIndex * 1.15;
    const wave = Math.sin(phase);
    const scale = 1 + progress * (0.04 + wave * 0.075) + proximity * 0.22;
    const y = Math.cos(phase + wordIndex) * progress * -13 - proximity * 18;
    const x = Math.sin(phase * 0.8) * progress * 8 + proximity * (center < state.pointerX ? -8 : 8);
    const rotate = wave * progress * 3.4 + proximity * (center < state.pointerX ? -2 : 2);

    el.style.setProperty("--char-scale", scale.toFixed(3));
    el.style.setProperty("--char-y", `${y.toFixed(2)}px`);
    el.style.setProperty("--char-x", `${x.toFixed(2)}px`);
    el.style.setProperty("--char-rotate", `${rotate.toFixed(2)}deg`);
  });
}

function updateWorkMotion() {
  if (!workSection || !workTrack || window.innerWidth <= 720) return;

  const progress = sectionProgress(workSection);
  const styles = getComputedStyle(document.documentElement);
  const pad = parseFloat(styles.getPropertyValue("--pad")) || 48;
  const trackTravel = Math.max(0, workTrack.scrollWidth - window.innerWidth + pad);
  workTrack.style.setProperty("--track-x", `${(-trackTravel * progress).toFixed(2)}px`);

  const activeIndex = progress * Math.max(1, workCards.length - 1);
  workCards.forEach((card, index) => {
    const proximity = clamp(1 - Math.abs(activeIndex - index) * 0.62);
    const drift = Math.sin(progress * Math.PI * 2 + index * 0.72);
    const scale = 0.965 + proximity * 0.09;
    const y = -proximity * 42 + drift * 8;
    const rotate = (index % 2 === 0 ? -1 : 1) * (1 - proximity) * 2.2 + drift * 0.55;
    const zoom = 1.045 + proximity * 0.15 + Math.sin(progress * Math.PI * 2 + index) * 0.02;
    const mockX = drift * 13;

    card.style.setProperty("--card-s", scale.toFixed(3));
    card.style.setProperty("--card-y", `${y.toFixed(2)}px`);
    card.style.setProperty("--card-r", `${rotate.toFixed(2)}deg`);
    card.style.setProperty("--mock-zoom", zoom.toFixed(3));
    card.style.setProperty("--mock-x", `${mockX.toFixed(2)}px`);
  });
}

function updateAmbientMotion() {
  ambientShapes.forEach((shape, index) => {
    const drift = state.smoothScroll * (0.045 + index * 0.022);
    const rotate = state.smoothScroll * 0.012 + index * 11;
    shape.style.transform = `translate3d(${(state.mouseX * (0.12 + index * 0.04)).toFixed(2)}px, ${drift.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg)`;
  });
}

function animate() {
  state.targetScroll = window.scrollY;
  state.smoothScroll = lerp(state.smoothScroll, state.targetScroll, 0.115);
  state.mouseX = lerp(state.mouseX, state.targetMouseX, 0.105);
  state.mouseY = lerp(state.mouseY, state.targetMouseY, 0.105);

  const hProgress = heroProgress();
  updateHeroMotion(hProgress);
  updateWorkMotion();
  updateAmbientMotion();

  requestAnimationFrame(animate);
}

if (!reduceMotion) {
  requestAnimationFrame(animate);
} else {
  root.style.setProperty("--hero-progress", "0");
  root.style.setProperty("--mx", "0px");
  root.style.setProperty("--my", "0px");
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
});

document.addEventListener("pointerdown", (event) => {
  const burst = document.createElement("span");
  burst.className = "click-burst";
  burst.style.setProperty("--x", `${event.clientX}px`);
  burst.style.setProperty("--y", `${event.clientY}px`);
  document.body.appendChild(burst);
  window.setTimeout(() => burst.remove(), 680);

  const target = event.target.closest(".magnetic, .work-card, .glass-card, .footer-mail");
  if (!target) return;
  target.classList.remove("clicked");
  void target.offsetWidth;
  target.classList.add("clicked");
  window.setTimeout(() => target.classList.remove("clicked"), 520);
});

const copyButton = document.querySelector(".copy-email");
const toast = document.querySelector(".toast");

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email || "hello@roshanarun.com";
  try {
    await navigator.clipboard.writeText(email);
    if (toast) toast.textContent = "Email copied";
  } catch {
    window.location.href = `mailto:${email}`;
    if (toast) toast.textContent = "Opening email";
  }

  toast?.classList.add("show");
  window.setTimeout(() => toast?.classList.remove("show"), 1700);
});