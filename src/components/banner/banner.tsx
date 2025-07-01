'use client';

import { useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './banner.module.scss';

const images = ['assets/svg/2.svg', 'assets/svg/3.svg', 'assets/svg/4.svg'];

function BannerComponent() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.bannerWrapper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className={styles.swiper}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Banner ${idx + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.controls}>
        <div className={styles.controlsContent}>
          <div className={styles.navButtons}>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <FiArrowLeft color="#121212" size={20} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <FiArrowRight color="#121212" size={20} />
            </button>
          </div>
          <div className={styles.pagination}>
            <span>
              {String(activeIndex + 1).padStart(2, '0')} de{' '}
              {String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
