import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Link } from "@remix-run/react";


function SimpleButtonMap({ buttonsCollection }) {
  const scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scope all selectors to this component instance
    const ctx = gsap.context(() => {
      // Find every .fadeOut in this component and create a trigger
      gsap.utils.toArray(".fadeOut").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top bottom-=50", // fire when top is 50px above viewport bottom
          toggleClass: { targets: el, className: "enable" },
          once: true,
        });
      });
    }, scopeRef);

    // Refresh after images load to avoid misfires due to layout shifts
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert(); // kill all triggers in this scope
    };
  }, [buttonsCollection?.items?.length]);

  return (
    <div className="buttonContainer always-flex gap10" ref={scopeRef}>
      {buttonsCollection.items.map((block, i) => {
        const { title, buttonClass, buttonText, buttonLink } = block || {};
        const cardClass = `button fadeOut${buttonClass ? ` ${buttonClass}` : ""}`;

        return (
          <Link key={title || i} className={cardClass} to={buttonLink}>
            <span>{buttonText}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default SimpleButtonMap;
