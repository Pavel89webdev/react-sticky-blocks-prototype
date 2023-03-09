import { useLayoutEffect, useRef, useState } from "react";

export const STICKY_ROOT_ID = "sticky-root-id";

export const MainContent = ({ children }) => {
  const [marginTop, setMarginTop] = useState("0px");

  const mainElement = useRef(null);

  const setStickiesTop = () => {
    const HTMLcontent = mainElement.current;

    // find all elements with position: sticky
    const allChildren = [...HTMLcontent.children];

    const stickies = allChildren.filter((childElement) => {
      const style = window.getComputedStyle(childElement);
      const { position } = style;

      return position === "sticky";
    });

    // sort by order
    const sortedStickies = stickies.sort((a, b) =>
      a.offsetTop > b.offsetTop ? 1 : -1
    );

    // calculate initial top
    const stickyRootElement = document.querySelector(`#${STICKY_ROOT_ID}`);
    const stickyRootStyles = window.getComputedStyle(stickyRootElement);
    const isStickyRootFixed = stickyRootStyles.position === "fixed";

    let initialTop = 0;

    // check if root is fixed - set roots height to initialTop
    if (isStickyRootFixed) {
      initialTop = Number.parseInt(stickyRootStyles.height);
      // set marginTop to main tag
      setMarginTop(stickyRootStyles.height);
    }

    let top = initialTop;

    // set top to all stickies
    sortedStickies.forEach((stickyElement) => {
      const elementHeight = Number.parseInt(
        window.getComputedStyle(stickyElement).height
      );
      stickyElement.style.top = `${top}px`;

      top += elementHeight;
    });
  };

  useLayoutEffect(() => {
    setStickiesTop();
    
    // add resize listener
    window.addEventListener("resize", setStickiesTop)
  }, []);

  return (
    <main style={{ marginTop }} ref={mainElement}>
      {children}
    </main>
  );
};
