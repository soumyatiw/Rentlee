import styles from './Testimonial.module.css';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import t1 from '@/assets/t1.png'; // Milind
import t2 from '@/assets/t2.png'; // Shreya
import t3 from '@/assets/t3.png'; // Isha
import t4 from '@/assets/t4.png'; // Rachit
import t5 from '@/assets/t5.png'; // Harshita


const testimonials = [
    {
      name: 'Shreya Suman',
      text: "Rentlee made house hunting super easy! I found a lovely apartment near my college in just a day.",
      rating: 5,
      image: t2,
    },
    {
      name: 'Harshita Joshi',
      text: "Really liked the filters and tour options. Just wish the response time was a bit faster.",
      rating: 4,
      image: t5,
    },
    {
      name: 'Isha Tomar',
      text: "Simple and quick! I could compare places easily and apply without hassle.",
      rating: 5,
      image: t3,
    },
    {
      name: 'Milind Bansal',
      text: "Helpful platform but had to verify a few listings manually. Overall, a good experience.",
      rating: 4,
      image: t1,
    },
    {
      name: 'Rachit Gupta',
      text: "Very smooth process and tons of options! The images and descriptions were on point.",
      rating: 5,
      image: t4,
    },
  ];

export default function Testimonial() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Users Say</h2>
      <p className={styles.subtitle}>
        Hear from people who found their perfect rental with Rentlee
      </p>
      <div className={styles.scrollContainer}>
        {testimonials.map((user, index) => (
          <div className={styles.testimonialCard} key={index} data-aos="fade-up" data-aos-duration="2000">
            <Image src={user.image} alt={user.name} className={styles.avatar} width={80} height={80} />
            <h3 className={styles.name}>{user.name}</h3>
            <div className={styles.stars}>
              {Array.from({ length: 5 }, (_, i) =>
                i < user.rating ? (
                  <FaStar key={i} className={styles.starIcon} />
                ) : (
                  <FaRegStar key={i} className={styles.starIcon} />
                )
              )}
            </div>
            <p className={styles.text}>"{user.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
