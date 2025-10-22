import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Link } from "@remix-run/react";
import { Link as ScrollLink } from "react-scroll";

function SimpleButtonMap({ buttonsCollection }) {
  const scopeRef = useRef(null);
  const items = buttonsCollection?.items ?? [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fadeOut").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top bottom-=50",
          toggleClass: { targets: el, className: "enable" },
          once: true,
        });
      });
    }, scopeRef);

    const onLoad = () => ScrollTrigger.refresh();
    if (typeof window !== "undefined") window.addEventListener("load", onLoad);
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="buttonContainer always-flex gap10" ref={scopeRef}>
      {items.map((block, i) => {
        const { title, buttonClass, buttonText, buttonLink } = block || {};
        const cardClass = `button fadeOut${buttonClass ? ` ${buttonClass}` : ""}`;

        // If buttonClass is "scrollLink", use react-scroll
        if (buttonClass === "scrollLink") {
          // react-scroll expects the target element's id or "name" (without the leading #)
          const toId = (buttonLink || "").replace(/^#/, "");
          return (
            <ScrollLink
              key={title || i}
              className={cardClass}
              to={toId}
              
              
            >
              <span>{buttonText ?? "Scroll"}</span>
            </ScrollLink>
          );
        }

        // Otherwise, use normal Remix <Link> for navigation
        return (
          <Link key={title || i} className={cardClass} to={buttonLink || "#"}>
            <span>{buttonText ?? "Link"}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default SimpleButtonMap;
