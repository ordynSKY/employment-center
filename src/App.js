import "./App.css";
import Header from "./components/Header/Header.jsx";
import Vacancies from "./components/Vacancies/Vacancies.jsx";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Vacancies />
      </section>
    </div>
  );
}

export default App;
