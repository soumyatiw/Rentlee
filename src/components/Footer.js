
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <h2 className={styles.brand}>Rentlee</h2>
          <p>Making renting simple, transparent, and stress-free since 2020.</p>
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className={styles.linkSections}>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/browse">Browse Rentals</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Renter's Guide</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Rental Calculator</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>2329 Rentlee Town, Karol Bagh, Delhi 110094</li>
              <li>rentfromrentlee@gmail.com</li>
              <li>+91 7495042431</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© 2025 Rentlee. All rights reserved.</p>
        <div className={styles.policies}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
