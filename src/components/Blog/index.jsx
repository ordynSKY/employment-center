import styles from "./Blog.module.css";

const Blog = () => (
  <div className={styles.section}>
    <div className={styles.title}>
      Новини
      <img src="/svg/blogvector.svg" alt="fire" style={{ marginLeft: 25 }} />
    </div>
    <div className={styles.cardsSection}>
      <article className={styles.card}>
        <div>
          <img src="/images/blog1.png" alt="blog" />
        </div>
        <div className={styles.cardTitle}>
          Як стрес впливає на ваш сон і що допоможе зменшити рівень тривоги?
        </div>
        <div className={styles.cardDescription}>24.12.2022</div>
      </article>
      <article className={styles.card}>
        <div>
          <img src="/images/blog2.png" alt="blog" />
        </div>
        <div className={styles.cardTitle}>
          22 грудня пройде безкоштовний вебінар «Як створювати бізнес під час
          війни»
        </div>
        <div className={styles.cardDescription}>24.12.2022</div>
      </article>
      <article className={styles.card}>
        <div>
          <img src="/images/blog3.png" alt="barista" />
        </div>
        <div className={styles.cardTitle}>
          Спати чи не спати прой
          <br />
        </div>
        <div className={styles.cardDescription}>24.12.2022</div>
      </article>
    </div>
    <div className={styles.more}>
      <img src="/svg/ArrowLeft.svg" alt="fire" style={{ cursor: "pointer" }} />
      Всі новини
      <img src="/svg/ArrowRight.svg" alt="fire" style={{ cursor: "pointer" }} />
    </div>
  </div>
);

export default Blog;
