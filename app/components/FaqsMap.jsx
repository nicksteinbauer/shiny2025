import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import RichTextRenderer from "./RichTextRenderer";


function FaqsMap({ simpleReferenceCollection }) {
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
  }, [simpleReferenceCollection?.items?.length]);

  return (
    <div className="faqContainer" ref={scopeRef}>
      {simpleReferenceCollection.items.map((block, i) => {
        const { title, visualTitle, content } = block || {};
        

        return (
          <div key={title || i} className="fadeOut faq">
            <h3>{visualTitle}</h3>
            {content?.json && (
              <div><RichTextRenderer content={content?.json} /></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqsMap;
