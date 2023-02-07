import "./Modal.css";

const Modal = (props) => {
  const { active, setActive, email, setEmail, password, setPassword } = props;
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title">
          <b>Вітаємо!</b>
          <br />
          Для користування особистим кабінетом
          <br />
          пройдіть експрес-реєстрацію
        </div>
        <form
          action=""
          autoComplete="on"
          name="register"
          className="form__register"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="text"
            name="register"
            placeholder="Пошта"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="input"
            placeholder="Пароль"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button name="register" className="button__register">
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
