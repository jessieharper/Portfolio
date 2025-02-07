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

export { updateCSSVariables };
