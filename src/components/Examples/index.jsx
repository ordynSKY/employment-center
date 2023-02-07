import styles from "./Examples.module.css";

const Examples = () => {
  const url = "https://ednipro.dp.ua/Шпалери.zip";

  return (
    <div className={styles.section}>
      <div className={styles.title}>
        Зразки документів
        <img src="/svg/example.svg" alt="fire" style={{ marginLeft: 25 }} />
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.docHovered}>
          <div>
            <a href={url} download className={styles.link}>
              <img src="/svg/download.svg" alt="designer" />
            </a>
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <img src="/images/doc1.png" alt="blog" />
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <img src="/images/doc2.png" alt="blog" />
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <img src="/images/doc3.png" alt="blog" />
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
