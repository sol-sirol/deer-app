import { ReactNode, useEffect, useRef } from "react";

interface AnimatedSectionProps {
  variant?: "title" | "section" | "logo";
  children: ReactNode;
  style?: React.CSSProperties;
}

const AnimatedSection = ({
  children,
  variant = "title",
  style,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={
        {
          title: "fade-in-for-title",
          section: "fade-in-for-section",
          logo: "fade-in-for-logo",
        }[variant]
      }
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
