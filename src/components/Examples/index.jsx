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
            <img
              src="/images/docHovered.png"
              alt="blog"
              className={styles.hovered}
            />
            <a href={url} download className={styles.link}>
              <img src="/svg/download.svg" alt="designer" />
            </a>
          </div>
          <div className={styles.cardTitle}>Стандартне резюме</div>
        </article>

        <article className={styles.card}>
          <div>
            <img src="/images/doc1.png" alt="blog" className={styles.hovered} />
            <a href={url} download className={styles.link}>
              <img src="/svg/download.svg" alt="designer" />
            </a>
          </div>
          <div className={styles.cardTitle}>Заява на звільнення</div>
        </article>
        <article className={styles.card}>
          <div>
            <img src="/images/doc2.png" alt="blog" className={styles.hovered} />
            <a href={url} download className={styles.link}>
              <img src="/svg/download.svg" alt="designer" />
            </a>
          </div>
          <div className={styles.cardTitle}>Витяг з реєстру</div>
        </article>
        <article className={styles.card}>
          <div>
            <img src="/images/doc3.png" alt="blog" className={styles.hovered} />
            <a href={url} download className={styles.link}>
              <img src="/svg/download.svg" alt="designer" />
            </a>
          </div>
          <div className={styles.cardTitle}>Заява на прийом на роботу</div>
        </article>
      </div>
      <div className={styles.more}>Всі документи</div>
    </div>
  );
};

export default Examples;
