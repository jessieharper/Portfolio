const updateCSSVariables = () => {
  const body = document.body;

  if (body.classList.contains("about")) {
    document.documentElement.style.setProperty(
      "--body",
      "linear-gradient(to right, hsl(197, 49%, 61%), hsl(224, 74%, 63%))"
    );
  } else {
    document.documentElement.style.setProperty("--body", "hsl(35, 55%, 92%)");
  }
};

const getSlideClass = (
  index: number,
  activeIndex: number,
  total: number
): string => {
  const secondLeft = (activeIndex + 2) % total;
  const firstLeft = (activeIndex + 1) % total;
  const firstRight = (activeIndex - 1 + total) % total;
  const secondRight = (activeIndex - 2 + total) % total;

  const isVisible = [
    secondLeft,
    firstLeft,
    activeIndex,
    firstRight,
    secondRight,
  ].includes(index);

  let slideClass = "";

  if (index === secondRight) slideClass += "-translate-x-full scale-75 z-10";
  else if (index === firstRight)
    slideClass += "-translate-x-1/2 scale-90 z-20 ";
  else if (index === activeIndex) slideClass += "translate-x-0 scale-100 z-30";
  else if (index === firstLeft) slideClass += "translate-x-1/2 scale-90 z-20";
  else if (index === secondLeft) slideClass += "translate-x-full scale-75 z-10";

  if (!isVisible) slideClass += "opacity-0 scale-0 -z-10";

  return slideClass;
};

export { updateCSSVariables, getSlideClass };
