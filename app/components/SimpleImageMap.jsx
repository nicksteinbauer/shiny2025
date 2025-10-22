import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


function SimpleImageMap({ bannersCollection }) {
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
  }, [bannersCollection?.items?.length]);

  return (
    <div className="imageContainer flex-xs" ref={scopeRef}>
      {bannersCollection.items.map((block, i) => {
        const { title, image, imageClass} = block || {};
        const cardClass = ["simpleImg", "fadeOut", "flex-vertical", imageClass].filter(Boolean).join(" ");

        return (
          <div key={title || i} className={cardClass}>
            {image?.url && (
              <img
                src={`${image.url}?w=1200&q=75`}
                srcSet={`${image.url}?w=600&q=70 600w, ${image.url}?w=900&q=70 900w, ${image.url}?w=1200&q=70 1200w`}
                sizes="(max-width: 800px) 100vw, 1200px"
                alt={image.description || image.title || title || "Image"}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SimpleImageMap;
