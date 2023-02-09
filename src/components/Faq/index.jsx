import { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [showDescription, setShowDescription] = useState(true);

  const description =
    "После основного вопроса о виновности подсудимого могут ставиться частные вопросы о таких обстоятельствах, которые влияют на степень виновности либо изменяют ее характер, влекут за собой освобождение подсудимого от ответственности. В необходимых случаях отдельно ставятся также частные вопросы о степени осуществления преступного намерения, причинах, в силу которых деяние не было доведено до конца, степени и характере соучастия каждого из подсудимых в совершении преступления (примеры вопросов по делам о преступлении, совершенном несколькими подсудимыми, приведены выше).";
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        Часті запитання
        <img src="/svg/faq.svg" alt="fire" style={{ marginLeft: 25 }} />
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.card}>
          <div>
            <div className={styles.cardTitle}>
              22 грудня пройде безкоштовний вебінар «Як створювати бізнес під
              час війни»
            </div>
            {showDescription && (
              <div className={styles.cardDescription}>{description}</div>
            )}
          </div>
          <div className={styles.svg}>
            <img
              src="/svg/minus.svg"
              alt="fire"
              className={styles.svg}
              onClick={() => setShowDescription(false)}
            />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.cardTitle}>
            22 грудня пройде безкоштовний вебінар «Як створювати бізнес під час
            війни»
          </div>
          {showDescription && (
            <div className={styles.cardDescription}>{description}</div>
          )}
          <div className={styles.svg}>
            <img
              src="/svg/plus.svg"
              alt="fire"
              className={styles.svg}
              onClick={() => setShowDescription(false)}
            />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.cardTitle}>
            Як заповнити анкети на перевипуск?
          </div>
          {showDescription && (
            <div className={styles.cardDescription}>{description}</div>
          )}
          <div className={styles.svg}>
            <img
              src="/svg/plus.svg"
              alt="fire"
              className={styles.svg}
              onClick={() => setShowDescription(false)}
            />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.cardTitle}>
            Коли закінчиться війна і можна працювати нормально?
          </div>
          {showDescription && (
            <div className={styles.cardDescription}>{description}</div>
          )}
          <div className={styles.svg}>
            <img
              src="/svg/plus.svg"
              alt="fire"
              className={styles.svg}
              onClick={() => setShowDescription(false)}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Faq;
