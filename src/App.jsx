import { createElement, useEffect, useMemo, useState } from "react";
import AOS from "aos";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import sourceHtml from "./source.html?raw";
import CaseStudyPage from "./CaseStudyPage.jsx";

const attributeAliases = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  crossorigin: "crossOrigin",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
};

function cssToReactStyle(cssText) {
  return cssText.split(";").reduce((style, declaration) => {
    const separator = declaration.indexOf(":");
    if (separator === -1) return style;

    const property = declaration.slice(0, separator).trim();
    const value = declaration.slice(separator + 1).trim();
    if (!property || !value) return style;

    const reactProperty = property.startsWith("--")
      ? property
      : property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    style[reactProperty] = value;
    return style;
  }, {});
}

function domToReact(node, key = "root") {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;

  const props = { key };
  for (const attribute of node.attributes) {
    const name = attributeAliases[attribute.name] || attribute.name;

    if (name === "style") {
      props.style = cssToReactStyle(attribute.value);
    } else if (
      name === "value" &&
      ["INPUT", "TEXTAREA"].includes(node.tagName)
    ) {
      props.defaultValue = attribute.value;
    } else if (
      attribute.value === "" &&
      ["download", "disabled", "checked", "selected"].includes(name)
    ) {
      props[name] = true;
    } else {
      props[name] = attribute.value;
    }
  }

  const children = Array.from(node.childNodes).map((child, index) =>
    domToReact(child, `${key}-${index}`),
  );
  return createElement(node.tagName.toLowerCase(), props, ...children);
}

function prepareSource() {
  const documentSnapshot = new DOMParser().parseFromString(
    sourceHtml,
    "text/html",
  );
  const main = documentSnapshot.querySelector("main");

  documentSnapshot.querySelectorAll("section[id]").forEach((section, index) => {
    section.setAttribute("data-aos", index === 0 ? "fade" : "fade-up");
    section.setAttribute("data-aos-duration", index === 0 ? "900" : "700");
    section.setAttribute("data-aos-easing", "ease-out-cubic");
    section.setAttribute("data-aos-once", "true");
    section.setAttribute("data-aos-offset", index === 0 ? "0" : "90");
  });

  return {
    css: Array.from(documentSnapshot.querySelectorAll("head style"))
      .map((style) => style.textContent)
      .join("\n"),
    main,
  };
}

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

function MobileMenu({ open, onNavigate }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
      style={{
        background: "#00000090",
        backdropFilter: "blur(10px)",
      }}
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute top-4 right-4 text-3xl text-white"
        onClick={() => onNavigate(null)}
      >
        ×
      </button>
      {navItems.map((item) => (
        <button
          key={item}
          type="button"
          className="font-display text-xl uppercase tracking-[0.2em] text-white hover:text-[var(--accent)] transition-colors"
          onClick={() => onNavigate(item.toLowerCase())}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function PortfolioHome({ main }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const page = useMemo(() => domToReact(main), [main]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const scroll = window.setTimeout(() => {
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => window.clearTimeout(scroll);
  }, [location.hash]);

  const navigateTo = (sectionId) => {
    setMenuOpen(false);
    if (sectionId) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const header = document.querySelector('[data-testid="navbar"]');
    const updateHeader = () => {
      header?.classList.toggle("bg-black/80", window.scrollY > 20);
      header?.classList.toggle("backdrop-blur-md", window.scrollY > 20);
      header?.classList.toggle("border-b", window.scrollY > 20);
      header?.classList.toggle("border-white/10", window.scrollY > 20);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const handleClick = (event) => {
    const target = event.target.closest("button, a");
    if (!target) return;

    const testId = target.dataset.testid || "";
    const href = target.getAttribute("href") || "";

    if (href.startsWith("/case-study/")) {
      event.preventDefault();
      navigate(href);
      return;
    }

    if (testId === "navbar-mobile-toggle") {
      event.preventDefault();
      setMenuOpen(true);
      return;
    }

    if (testId === "navbar-logo") {
      event.preventDefault();
      navigateTo("hero");
      return;
    }

    if (testId.startsWith("nav-link-")) {
      event.preventDefault();
      navigateTo(testId.replace("nav-link-", ""));
      return;
    }

    if (testId === "hero-contact-btn") {
      event.preventDefault();
      navigateTo("contact");
    }
  };

  const handleSubmit = (event) => {
    if (!event.target.matches('[data-testid="contact-form"]')) return;
    event.preventDefault();
    const data = new FormData(event.target);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name") || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `${data.get("message") || ""}\n\nFrom: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}`,
    );
    window.location.href = `mailto:manmohanjangra2528@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="App" onClick={handleClick} onSubmit={handleSubmit}>
        {page}
      </div>
      <MobileMenu open={menuOpen} onNavigate={navigateTo} />
    </>
  );
}

export default function App() {
  const [{ css, main }] = useState(prepareSource);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    const refresh = window.setTimeout(() => AOS.refreshHard(), 80);
    return () => window.clearTimeout(refresh);
  }, [location.pathname]);

  return (
    <>
      <style>{css}</style>
      <Routes>
        <Route path="/" element={<PortfolioHome main={main} />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<PortfolioHome main={main} />} />
      </Routes>
    </>
  );
}
