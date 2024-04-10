const Header = (): JSX.Element => {
  return (
    <>
      <header className="flex flex-row h-auto w-full justify-between items-center p-4 m-auto">
        <h1 className="text-4xl font-semibold">Jessica Harper</h1>

        <nav>
          <ul className="h-full flex flex-row items-end align-bottom mt-2 ">
            <li className="mr-4">About Me</li>
            <li className="mr-4">Projects</li>
            <li className="mr-2">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
