const Header = (): JSX.Element => {
  return (
    <>
      <header
        id="home"
        className="container bg-transparent flex flex-row h-30 w-full items-center py-2 relative z-50 "
      >
        <h1 className="w-full h-full header relative">
          <img
            src="/images/logos/logo-alt.svg"
            alt="Jessica Harper"
            className="w-10/12 mx-auto lg:hidden max-w-[250px]"
          />
          <img
            src="/images/logos/JESSICA HARPER.svg"
            alt="Jessica Harper"
            className="hidden lg:block w-full lg:w-full xl:w-11/12 mx-auto"
          />
        </h1>
      </header>
    </>
  );
};

export default Header;
