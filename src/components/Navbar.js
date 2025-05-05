'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import logo from '@/assets/Logo.png';

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse', path: '/browse' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoBox}>
          <Image src={logo} alt="Rentlee Logo" width={36} height={36} />
          <span className={styles.brand}>Rent<span>lee</span></span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`${styles.link} ${currentPath === link.path ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
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
