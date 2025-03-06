import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.scss";

const ScrollToTopButton = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef?.current) return;

    const container = containerRef.current;

    const toggleVisibility = () => {
      if (container.scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", toggleVisibility);
    return () => container.removeEventListener("scroll", toggleVisibility);
  }, [containerRef]);

  const scrollToTop = () => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    isVisible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <i className={"fas fa-less-than "} />
      </div>
    )
  );
};
export default ScrollToTopButton;
