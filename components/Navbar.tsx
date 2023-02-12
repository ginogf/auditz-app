import styles from '@/styles/Home.module.css'
import Link from 'next/link';


export const Navbar = () => {
  return (
   <nav >
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div>
            <img src='/auditz.svg' className={styles.navbarImg} />
        </div>
      </div>
    </div>
   </nav>
  );
};