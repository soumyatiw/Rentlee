'use client';
import Image from 'next/image';
import styles from './BrowseHero.module.css';
import bheroImage from '@/assets/browsehero.png';
import { MapPin, Building2, IndianRupee, BedDouble, Search } from 'lucide-react';

export default function BrowseHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>Explore Your Dream Home</h1>
        <p className={styles.subtitle}>
          Browse thousands of rental properties tailored to your needs and budget.
        </p>

        <form className={styles.filters}>
          <div className={styles.field}>
            <label>
              <MapPin size={16} /> Location
            </label>
            <input
              type="text"
              placeholder="City, neighborhood"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>
              <Building2 size={16} /> Property Type
            </label>
            <select className={styles.select}>
              <option>Any type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Condo</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>
              <IndianRupee size={16} /> Price Range
            </label>
            <select className={styles.select}>
              <option>Any price</option>
              <option>Under ₹10,000</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹40,000</option>
              <option>₹40,000+</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>
              <BedDouble size={16} /> Bedrooms
            </label>
            <select className={styles.select}>
              <option>Any </option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>

          <button className={styles.button}>
            <Search size={16} style={{ marginRight: 8 }} /> Search Properties
          </button>
        </form>
      </div>

      <div className={styles.right}>
        <Image data-aos="fade-up" data-aos-duration="2000" src={bheroImage} alt="Hero" className={styles.imagePlaceholder} />
      </div>
    </section>
  );
}
