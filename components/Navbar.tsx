import React from "react";
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.fullWidth}>
        <div className="container-fluid" >
            <div className={styles.navbarContainer}>
                <div className={styles.navbarLeft}>
                    <img src="/auditz.svg" alt="Logo" className={styles.navbarImg} />
                </div>
                <div className={styles.navbarRight}>
                    <a
                        href="https://twitter.com/auditz_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: "auto" }}
                    >
                        <FontAwesomeIcon icon={faTwitter} className={styles.iconNavbar}/>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;