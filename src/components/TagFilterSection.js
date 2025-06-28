'use client';

import { useEffect, useState } from 'react';
import styles from './TagFilterSection.module.css';
import propertiesData from '@/data/main_data.json'; // Adjust the path as per your setup
import { Flame, Building2, Home, Hotel, Castle } from 'lucide-react';
import {BedDouble, Bath, Ruler, Sofa, CalendarDays, MapPin} from 'lucide-react';


export default function TagFilterSection() {
  const TAGS = [
    { label: 'Popular', icon: <Flame size={16} />, value: 'Popular' },
    { label: 'Apartments', icon: <Building2 size={16} />, value: 'Apartment' },
    { label: 'Houses', icon: <Home size={16} />, value: 'House' },
    { label: 'PG', icon: <Hotel size={16} />, value: 'PG' },
    { label: 'Villa', icon: <Castle size={16} />, value: 'Villa' },
  ];

  const [selectedTag, setSelectedTag] = useState('Popular');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    let filtered;

    if (selectedTag === 'Popular') {
      filtered = [...propertiesData]
        .sort((a, b) => a.rent - b.rent)
        .slice(0, 8);
    } else {
      filtered = propertiesData
        .filter((p) => p.category?.toLowerCase() === selectedTag.toLowerCase())
        .slice(0, 8);
    }

    setFilteredProperties(filtered);
  }, [selectedTag]);

  return (
    <section className={styles.section}>
      <div className={styles.tags}>
        {TAGS.map((tag) => (
          <button
            key={tag.value}
            className={`${styles.tagButton} ${selectedTag === tag.value ? styles.active : ''}`}
            onClick={() => setSelectedTag(tag.value)}
          >
            {tag.icon}
            {tag.label}
          </button>
        ))}
      </div>

      <h2 className={styles.heading}>Browse Rental Properties</h2>

    <div className={styles.cardsGrid}>
    {filteredProperties.map((property, idx) => (
        <div key={idx} className={styles.card}>
        <img
            src={property.image_url}
            alt={property.title}
            className={styles.image}
        />

        <div className={styles.content}>
            <h3 className={styles.title}>{property.title}</h3>

            <p className={styles.price}>₹{property.rent.toLocaleString()}/mo</p>

            <p className={styles.address}>
            <MapPin size={14} /> {property.city}, {property.state}
            </p>

            <div className={styles.details}>
            <span><BedDouble size={14} /> {property.bedrooms} Beds</span>
            <span><Bath size={14} /> {property.bathrooms} Baths</span>
            <span><Ruler size={14} /> {property.area_sqft} sq.ft</span>
            </div>

            <div className={styles.extra}>
            <span><Sofa size={14} /> {property.furnishing}</span>
            <span>
                <CalendarDays size={14} /> Available:{" "}
                {new Date(property.available_from).toLocaleDateString()}
            </span>
            </div>

            <button className={styles.viewButton}>View Details</button>
        </div>
        </div>
    ))}
    </div>
    </section>
  );
}
