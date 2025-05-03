import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '@/assets/Logo.png';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoBox}>
          <Image src={logo} alt="Rentlee Logo" width={36} height={36} />
          <span className={styles.brand}>Rent<span>lee</span></span>
        </Link>

        <ul className={styles.links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/browse">Browse</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>

        <div className={styles.auth}>
          <Link href="/login">
            <button className={styles.dotBtn}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={`${styles.dotBtn} ${styles.filled}`}>Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
