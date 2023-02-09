import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/index.jsx";
import Examples from "./components/Examples/index.jsx";
import Faq from "./components/Faq/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Modal from "./components/Modal/index.jsx";
import Vacancies from "./components/Vacancies/index.jsx";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="main_container">
      <header>
        <Header setActive={setModalActive} />
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
      <Modal
        active={modalActive}
        setActive={setModalActive}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
