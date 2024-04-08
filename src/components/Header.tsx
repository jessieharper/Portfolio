const Header = (): JSX.Element => {
  return (
    <>
      <header className="flex flex-row h-auto w-full justify-between items-center p-4">
        <h1 className="text-3xl m-2">Jessica Harper</h1>

        <nav>
          <ul className="h-full flex flex-row items-end align-bottom mt-2">
            <li className="mr-4">About Me</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
