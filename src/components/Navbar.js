'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import logo from '@/assets/Logo.png';

import useAuth from '@/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    const user = useAuth();
    const router = useRouter();

    useEffect(() => {
      setCurrentPath(window.location.pathname);
    }, []);

    const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
    };

    const handleLogout = async () => {
      await signOut(auth);
      router.refresh();
    };

    const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'Browse', path: '/browse' },
      { name: 'Blog', path: '/blog' },
      { name: 'About Us', path: '/about' }
    ];

    const firstLetter = user?.username?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logoBox}>
                    <Image src={logo} alt="Rentlee Logo" width={36} height={36} />
                    <span className={styles.brand}>Rent<span>lee</span></span>
                </Link>

                <ul className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
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

                {user ? (
                  <div className={styles.userMenu}>
                    <div className={styles.avatar}>
                      {firstLetter}
                      <div className={styles.dropdown}>
                        <Link href="/profile">Settings</Link>
                        <button onClick={handleLogout}>Logout</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.auth}>
                    <Link href="/login">
                        <button className={styles.dotBtn}>Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className={`${styles.dotBtn} ${styles.filled}`}>Sign Up</button>
                    </Link>
                  </div>
                )}

                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
