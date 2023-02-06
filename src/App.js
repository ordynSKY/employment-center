import "./App.css";
import Blog from "./components/Blog/Blog.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";
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
      <section>
        <Blog />
      </section>
      <section>
        <Faq />
      </section>
      <section>
        <Examples />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
