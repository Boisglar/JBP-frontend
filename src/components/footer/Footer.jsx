import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_style}>
      <div className={styles.groz_styles}>
        <h3 className={styles.grozny}>Grozny</h3>

        <p className={styles.signUp}>
        Подпишитесь на сайт, чтобы получать уведомления о <br></br> наших лучших предложениях на
          идеальные подарки.
        </p>
      </div>

        <div className={styles.things}>
          <a className={styles.nav_link} href="#">
            Продукция
          </a>

          <a className={styles.nav_link} href="#">
            Часы
          </a>

          <a className={styles.nav_link} href="#">
            Планшеты
          </a>

          <a className={styles.nav_link} href="#">
            Ноутбуки
          </a>
        </div>

        <div className={styles.company}>
          <a className={styles.nav_link} href="#">
            Компания
          </a>

          <a className={styles.nav_link} href="#">
            О нас
          </a>

          <a className={styles.nav_link} href="#">
            Поддержка
          </a>
        </div>

        <div className={styles.div_support}>
          <a className={styles.nav_link} href="#">
            Поддержка
          </a>

          <a className={styles.nav_link} href="#">
          Гид по стилю
          </a>

          <a className={styles.nav_link} href="#">
          Лицензирование
          </a>

          <a className={styles.nav_link} href="#">
          Журнал изменений
          </a>

          <a className={styles.nav_link} href="#">
          Контакт
          </a>
        </div>

        <div className={styles.div_follow}>
          <a className={styles.nav_link} href="#">
          Подписывайтесь на нас
          </a>
          <a className={styles.nav_link} href="#">
            Instagram
          </a>
          <a className={styles.nav_link} href="#">
            Facebook
          </a>
          <a className={styles.nav_link} href="#">
            Lincedin
          </a>
          <a className={styles.nav_link} href="#">
            Youtube
          </a>
        </div>
    </footer>
  );
}
