const TechStackLogos = (): JSX.Element => {
  const logos = [
    "javascript",
    "react",
    "typescript",
    "node",
    "tailwind",
    "laravel",
    "mongoDB",
    "sql",
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
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
