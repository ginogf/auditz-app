import React from "react";
import styles from '@/styles/Home.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <p>
                made with love by{" "}
                <a
                href="https://twitter.com/GinoGuatavita"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                >
                @GinoGuatavita
                </a>
            </p>
        </div>
    </footer>
  );
};

export default Footer;