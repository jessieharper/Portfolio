const TechStackLogos = (): JSX.Element => {
  const logos = ["javascript", "php", "sql", "react", "tailwind", "laravel"];

  return (
    <div className="grid grid-cols-3 gap-6">
      {logos.map((logo) => (
        <div key={logo} className="relative group flex justify-center">
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
