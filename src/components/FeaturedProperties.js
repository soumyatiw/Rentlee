import styles from './FeaturedProperties.module.css';
import Image from 'next/image';
import Link from 'next/link';
import properties from '@/data/main_data.json';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const FeaturedProperties = () => {
    const featured = properties.slice(0, 3);

    return (
        <section className={styles.featured}>
            <h2 className={styles.heading}>Featured Properties</h2>
            <p className={styles.subheading}>Discover our handpicked rentals available right now</p>

            <div className={styles.grid} data-aos="fade-up" data-aos-duration="2000">
                {featured.map((property) => (
                    <div className={styles.card} key={property.id}>
                        <img src={property.image_url} alt={property.title} className={styles.image} />
                        <div className={styles.details}>
                            <h3>{property.title}</h3>
                            <p className={styles.meta}><FaMapMarkerAlt className={styles.icon} /> {property.city}, {property.state}</p>
                            <div className={styles.specs}>
                                <div className={styles.specItem}>
                                    <FaBed className={styles.icon} />
                                    <span>{property.bedrooms} Beds</span>
                                </div>
                                <div className={styles.specItem}>
                                    <FaBath className={styles.icon} />
                                    <span>{property.bathrooms} Baths</span>
                                </div>
                                <div className={styles.specItem}>
                                    <FaRulerCombined className={styles.icon} />
                                    <span>{property.area_sqft} sqft</span>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <span className={styles.price}>₹{property.rent.toLocaleString()}/mo</span>
                                <button className={styles.viewBtn}>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/browse" className={styles.browseAllBtn}>
                Browse All Properties
            </Link>
        </section>
    );
};

export default FeaturedProperties;
