import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bgColor}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="header" style={{ paddingRight: "116px" }} />
        <div>
          <div style={{ display: "flex" }}>
            <a href="" className={styles.footer}>
              Створити вакансію
            </a>

            <a href="" className={styles.footer}>
              Чат
            </a>
            <a href="" className={styles.footer}>
              Створити резюме
            </a>
            <a href="" className={styles.footer}>
              Новини
            </a>
            <a href="" className={styles.footer}>
              Приклади документів
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <img src="/phone.svg" alt="fire" style={{ marginRight: "30px" }} />

            <a href="tel:+3809878526" className={styles.footerNum}>
              +380 98 78 526
            </a>
            <a href="tel:+3809878565" className={styles.footerNum}>
              +380 98 78 565
            </a>
            <a href="tel:+3809878543" className={styles.footerNum}>
              +380 98 78 543
            </a>
            <img src="/fb.svg" alt="fire" style={{ marginRight: "30px" }} />
            <a
              href="https://www.facebook.com/centr.zan"
              className={styles.footerNum}
            >
              centr.zan
            </a>
          </div>
          <div className={styles.chat}>
            <img src="/chat.svg" alt="header" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
