import styles from "./Vacancies.module.css";

const Vacancies = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        Гарячі вакансії
        <img src="/Vector.svg" alt="fire" style={{ marginLeft: "25px" }} />
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.cardHovered}>
          <div className={styles.icon}>
            <img src="/icons/barista.png" alt="barista" />
          </div>
          <div className={styles.cardTitle}>Бариста</div>
          <div className={styles.cardDescription}>250 пропозицій</div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/designer.png" alt="designer" />
          </div>
          <div className={styles.cardTitle}>Графічний дизайнер</div>
          <div className={styles.cardDescription}>150 пропозицій</div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/lawyer.png" alt="lawyer" />
          </div>
          <div className={styles.cardTitle}>Юрист з питань тендерів</div>
          <div className={styles.cardDescription}>150 пропозицій</div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/developer.png" alt="developer" />
          </div>
          <div className={styles.cardTitle}>React-розробник (віддалено)</div>
          <div className={styles.cardDescription}>150 пропозицій</div>
        </article>
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/сook.png" alt="сook" />
          </div>
          <div className={styles.cardTitle}>Кухар-універсал</div>
          <div className={styles.cardDescription}>100 пропозицій</div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/paramedic.png" alt="paramedic" />
          </div>
          <div className={styles.cardTitle}>Парамедик</div>
          <div className={styles.cardDescription}>150 пропозицій</div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <img src="/icons/trainer.png" alt="trainer" />
          </div>
          <div className={styles.cardTitle}>
            Дитячий тренер
            <br /> з футболу
          </div>
          <div className={styles.cardDescription}>150 пропозицій</div>
        </article>
        <article className={styles.cardHovered}>
          <div className={styles.more}>Всі вакансії</div>
        </article>
      </div>
    </div>
  );
};

export default Vacancies;
