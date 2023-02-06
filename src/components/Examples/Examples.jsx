import styles from "./Examples.module.css";

const Examples = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        Зразки документів
        <img src="/example.svg" alt="fire" style={{ marginLeft: "25px" }} />
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.docHovered}>
          <div>
            <img src="/download.svg" alt="designer" />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles}>
            <img src="/doc1.png" alt="blog" />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles}>
            <img src="/doc2.png" alt="blog" />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles}>
            <img src="/doc3.png" alt="blog" />
          </div>
        </article>
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.cardTitle}>Стандартне резюме</article>
        <article className={styles.cardTitle}>Заява на звільнення</article>
        <article className={styles.cardTitle}>Витяг з реєстру</article>
        <article className={styles.cardTitle}>
          Заява на прийом на роботу
        </article>
      </div>
      <div className={styles.more}>Всі документи</div>
    </div>
  );
};

export default Examples;
