import Header from "./components/Header";
import Cursor from "./components/Cursor";
import "./index.css";

const App = (): JSX.Element => {
  return (
    <main className="h-[100vh] w-[100vw] overflow-hidden">
      <Header />
      <Cursor />
    </main>
  );
};

export default App;
