import Image from 'next/image';
import styles from './HeroSection.module.css';
import heroImage from '@/assets/hero-image.png';
import { FaCheckCircle, FaLock, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
            Find Your Perfect <span>Rental Home</span>
        </h1>
        <p className={styles.subtitle}>
            Explore thousands of verified listings with secure payments and real-time support.
        </p>

        <div className={styles.searchBox}>
            <FaMapMarkerAlt className={styles.icon} />
            <input type="text" placeholder='Search by city or location...' />
            <button>Search</button>
        </div>

        <div className={styles.tags}>
            <span><FaCheckCircle /> Verified</span>
            <span><FaLock /> Secure</span>
            <span><FaPhoneAlt /> 24x7 Support</span>
        </div>
      </div>

      <div className={styles.right}>
        <Image data-aos="fade-up" data-aos-duration="2000" src={heroImage} alt="Hero" className={styles.heroImage} />
      </div>
    </section>
  );
}
