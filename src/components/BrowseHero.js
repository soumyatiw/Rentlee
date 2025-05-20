'use client';

import styles from './BrowseHero.module.css';

export default function BrowseHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>Find Your Perfect Rental Space</h1>
        <p className={styles.subtitle}>
          Browse thousands of rental properties tailored to your needs and budget.
        </p>

        <form className={styles.filters}>
          <input type="text" placeholder="City, neighborhood" className={styles.input} />
          <select className={styles.select}>
            <option>Any type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
          </select>
          <select className={styles.select}>
            <option>Any price</option>
            <option>Under ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>₹20,000 - ₹40,000</option>
            <option>₹40,000+</option>
          </select>
          <select className={styles.select}>
            <option>Any bedrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
          <button className={styles.button}>Search Properties</button>
        </form>
      </div>

      <div className={styles.right}>
        <div className={styles.imagePlaceholder}>
          {/* You can use an actual <Image> here if you want */}
          📷
        </div>
      </div>
    </section>
  );
}
