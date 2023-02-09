import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bgColor}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"
          alt="header"
          className={styles.logoFooter}
        />
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src="/svg/phone.svg" alt="fire" className={styles.svg} />

            <a href="tel:+3809878526" className={styles.footerNum}>
              +380 98 78 526
            </a>
            <a href="tel:+3809878565" className={styles.footerNum}>
              +380 98 78 565
            </a>
            <a href="tel:+3809878543" className={styles.footerNum}>
              +380 98 78 543
            </a>
            <img src="/svg/fb.svg" alt="fire" className={styles.svg} />
            <a
              href="https://www.facebook.com/centr.zan"
              className={styles.footerNum}
            >
              centr.zan
            </a>
          </div>
          <div className={styles.chat}>
            <img
              src="/svg/chat.svg"
              alt="header"
              className={styles.chatImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
