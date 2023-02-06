import styles from "./Faq.module.css";

const Blog = () => (
  <div className={styles.section}>
    <div className={styles.title}>
      Часті запитання
      <img src="/faq.svg" alt="fire" style={{ marginLeft: "25px" }} />
    </div>
    <div className={styles.cardsSection}>
      <article className={styles.card}>
        <div className={styles.cardTitle}>
          22 грудня пройде безкоштовний вебінар «Як створювати бізнес під час
          війни»
        </div>
        <div className={styles.cardDescription}>
          После основного вопроса о виновности подсудимого могут ставиться
          частные вопросы о таких обстоятельствах, которые влияют на степень
          виновности либо изменяют ее характер, влекут за собой освобождение
          подсудимого от ответственности. В необходимых случаях отдельно
          ставятся также частные вопросы о степени осуществления преступного
          намерения, причинах, в силу которых деяние не было доведено до конца,
          степени и характере соучастия каждого из подсудимых в совершении
          преступления (примеры вопросов по делам о преступлении, совершенном
          несколькими подсудимыми, приведены выше).
        </div>
        <div
          style={{
            position: "absolute",
            right: "45px",
            top: "175px",
            cursor: "pointer",
          }}
        >
          <img src="/minus.svg" alt="fire" style={{ marginLeft: "25px" }} />
        </div>
      </article>
      <article className={styles.cardClosed}>
        <div className={styles.cardTitle}>
          22 грудня пройде безкоштовний вебінар «Як створювати бізнес під час
          війни»
        </div>
        <img
          src="/plus.svg"
          alt="fire"
          style={{ marginRight: "45px", cursor: "pointer" }}
        />
      </article>
      <article className={styles.cardClosed}>
        <div className={styles.cardTitle}>
          Як заповнити анкети на перевипуск?
        </div>
        <img
          src="/plus.svg"
          alt="fire"
          style={{ marginRight: "45px", cursor: "pointer" }}
        />
      </article>
      <article className={styles.cardClosed}>
        <div className={styles.cardTitle}>
          Коли закінчиться війна і можна працювати нормально?
        </div>
        <img
          src="/plus.svg"
          alt="fire"
          style={{ marginRight: "45px", cursor: "pointer" }}
        />
      </article>
    </div>
  </div>
);

export default Blog;
