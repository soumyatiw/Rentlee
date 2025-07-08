'use client';

import styles from './AboutPage.module.css';
import Image from 'next/image';
import storyImage from '@/assets/about-page.png';

import { FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';


export default function AboutHeroSection() {
    return (
        <section className={styles.Wrapper}>
            <section className={styles.hero}>
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        Discover the Story Behind <span>Rentlee</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Transforming the rental experience through innovation, trust, and community since 2020.
                    </p>

                    <div className={styles.buttons}>
                        <a href="#mission" className={styles.primaryBtn}>Our Mission</a>
                        <a href="#team" className={styles.secondaryBtn}>Meet Our Team</a>
                    </div>
                </div>
            </section>
            <section className={styles.story} >
                <h2 className={styles.heading}>Our Story</h2>
                <p className={styles.subtext}>
                    From a small startup to a thriving rental platform, our journey has been defined by our commitment<br />
                    to reimagining the rental experience.
                </p>

                <div className={styles.contentRow}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={storyImage}
                            alt="Rentlee Story Image"
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.textWrapper}>
                        <h3>How It All Began</h3>
                        <p>
                            Rentlee was founded in 2020 by a group of friends who experienced firsthand the challenges of
                            finding and managing rental properties. Frustrated by outdated systems and lack of transparency,
                            they envisioned a platform that would make renting as simple and enjoyable as possible.
                        </p>
                        <p>
                            Starting with just a handful of properties in one city, we've now expanded to serve thousands of
                            renters and property owners across the country, all while maintaining our core values of
                            transparency, innovation, and community.
                        </p>

                        <div className={styles.timeline}>
                            <span className={styles.year}>2020</span>
                            <span className={styles.event}>Year Rentlee was founded</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.missionSection} id="mission">
                <h2 className={styles.heading}>Our Mission & Values</h2>
                <p className={styles.subheading}>
                    We're driven by a simple mission: to create a rental experience that's transparent, fair, and stress-free for everyone involved.
                </p>

                <div className={styles.cards}>
                    <div className={styles.card} data-aos="fade-up-right" data-aos-duration="2000">
                        <div className={styles.iconWrapper}>
                            <FaHandshake className={styles.icon} />
                        </div>
                        <h3>Trust & Transparency</h3>
                        <p>
                            We believe in honest communication and full transparency between renters and property owners, creating a foundation of trust.
                        </p>
                    </div>

                    <div className={styles.card} data-aos="fade-up" data-aos-duration="2000">
                        <div className={styles.iconWrapper}>
                            <FaLightbulb className={styles.icon} />
                        </div>
                        <h3>Innovation</h3>
                        <p>
                            We constantly explore new technologies and approaches to make the rental process simpler, faster, and more enjoyable.
                        </p>
                    </div>

                    <div className={styles.card} data-aos="fade-up-left" data-aos-duration="2000">
                        <div className={styles.iconWrapper}>
                            <FaUsers className={styles.icon} />
                        </div>
                        <h3>Community</h3>
                        <p>
                            We foster a sense of community among renters and property owners, recognizing that housing is about people, not just properties.
                        </p>
                    </div>
                </div>
            </section>

        </section>
    );
}
