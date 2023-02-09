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
        <img src="/svg/faq.svg" alt="fire" className={styles.titleSvg} />
      </div>
      <div className={styles.cardsSection}>
        <article className={styles.card}>
          <div>
            <div className={styles.cardTitle}>
              22 грудня пройде безкоштовний вебінар «Як створювати бізнес під
              час війни»
            </div>
            {showDescription === 0 && (
              <div className={styles.cardDescription}>{description}</div>
            )}
          </div>
          <div className={styles.svg}>
            <img
              src={showDescription === 0 ? "/svg/minus.svg" : "/svg/plus.svg"}
              alt="fire"
              className={styles.svg}
              onClick={() =>
                setShowDescription(showDescription === 0 ? null : 0)
              }
            />
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <div className={styles.cardTitle}>
              22 грудня пройде безкоштовний вебінар «Як створювати бізнес під
              час війни»
            </div>
            {showDescription === 1 && (
              <div className={styles.cardDescription}>{description}</div>
            )}
          </div>
          <div className={styles.svg}>
            <img
              src={showDescription === 1 ? "/svg/minus.svg" : "/svg/plus.svg"}
              alt="fire"
              className={styles.svg}
              onClick={() =>
                setShowDescription(showDescription === 1 ? null : 1)
              }
            />
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <div className={styles.cardTitle}>
              22 грудня пройде безкоштовний вебінар «Як створювати бізнес під
              час війни»
            </div>
            {showDescription === 2 && (
              <div className={styles.cardDescription}>{description}</div>
            )}
          </div>
          <div className={styles.svg}>
            <img
              src={showDescription === 2 ? "/svg/minus.svg" : "/svg/plus.svg"}
              alt="fire"
              className={styles.svg}
              onClick={() =>
                setShowDescription(showDescription === 2 ? null : 2)
              }
            />
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <div className={styles.cardTitle}>
              22 грудня пройде безкоштовний вебінар «Як створювати бізнес під
              час війни»
            </div>
            {showDescription === 3 && (
              <div className={styles.cardDescription}>{description}</div>
            )}
          </div>
          <div className={styles.svg}>
            <img
              src={showDescription === 3 ? "/svg/minus.svg" : "/svg/plus.svg"}
              alt="fire"
              className={styles.svg}
              onClick={() =>
                setShowDescription(showDescription === 3 ? null : 3)
              }
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Faq;
