import Header from "./components/Header";
import "./index.css";

const App = (): JSX.Element => {
  return (
    <main className="h-[100vh] w-[100vw] bg-slate-100">
      <Header />
    </main>
  );
};

export default App;
