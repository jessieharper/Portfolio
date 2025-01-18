const Footer = (): JSX.Element => {
  const today = new Date();
  const year = today.getFullYear();
  const iconClass =
    "h-8 w-8 icon-mask bg-primary hover:bg-accent transition-colors ease-in-out";

  return (
    <footer className="fixed bottom-5 right-5 z-50 flex items-end gap-8">
      <a
        href="https://github.com/jessieharper"
        target="_blank"
        aria-label="GitHub"
      >
        <div
          style={{
            maskImage: "url('/images/icons/github.svg')",
            WebkitMaskImage: "url('/images/icons/github.svg')",
          }}
          className={iconClass}
        ></div>
      </a>
      <a
        href="https://www.linkedin.com/in/jessie-harper/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <div
          style={{
            maskImage: "url('/images/icons/linkedin.svg')",
            WebkitMaskImage: "url('/images/icons/linkedin.svg')",
          }}
          className={iconClass}
        ></div>
      </a>

      <p className="text-sm font-depixel">Jessica Harper {year}</p>
    </footer>
  );
};

export default Footer;
