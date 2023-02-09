import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        Новини
        <img src="/svg/blogvector.svg" alt="fire" className={styles.titleSvg} />
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.card}>
          <div>
            <img
              src="/images/blog1.png"
              alt="blog"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardTitle}>
            Як стрес впливає на ваш сон і що допоможе зменшити рівень тривоги?
          </div>
          <div className={styles.cardDescription}>24.12.2022</div>
        </article>
        <article className={styles.card}>
          <div>
            <img
              src="/images/blog2.png"
              alt="blog"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardTitle}>
            22 грудня пройде безкоштовний вебінар «Як створювати бізнес під час
            війни»
          </div>
          <div className={styles.cardDescription}>24.12.2022</div>
        </article>
        <article className={styles.card}>
          <div>
            <img
              src="/images/blog2.png"
              alt="barista"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardTitle}>
            22 грудня пройде безкоштовний вебінар «Як створювати бізнес під час
            війни»
          </div>
          <div className={styles.cardDescription}>24.12.2022</div>
        </article>
      </div>
      <div className={styles.more}>
        <img src="/svg/ArrowLeft.svg" alt="fire" className={styles.arrows} />
        Всі новини
        <img src="/svg/ArrowRight.svg" alt="fire" className={styles.arrows} />
      </div>
    </div>
  );
};

export default Blog;
