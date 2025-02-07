const TechStackLogos = (): JSX.Element => {
  const logos = ["javascript", "php", "sql", "react", "node", "laravel"];

  return (
    <div className="flex flex-wrap items-center justify-around gap-2">
      {logos.map((logo) => (
        <div key={logo} className="relative group">
          <div
            style={{
              maskImage: `url('/images/icons/${logo}.svg')`,
              WebkitMaskImage: `url('/images/icons/${logo}.svg')`,
            }}
            className="icon-mask bg-primary h-12 w-16 relative inline-block"
          ></div>
          <span className="tooltip">{logo}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStackLogos;
