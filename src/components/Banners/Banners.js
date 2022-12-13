import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styles from './Banners.module.css';

const Banners = ({ banners, bannersMobile }) => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const nextArrowClass = `carousel-next-${randomNumber}`;
  const prevArrowClass = `carousel-previous-${randomNumber}`;

  const bannersList = window.innerWidth >= 1024 ? banners : bannersMobile;

  const defaultSwipeOptions = {
    preloadImages: true,
    lazy: true,
    loop: true,
    spaceBetween: 1,
    slidesPerView: 1,
    slidesPerColumnFill: 'row',
    navigation: {
      nextEl: `.${nextArrowClass}`,
      prevEl: `.${prevArrowClass}`,
    },
  };

  return (
    <div className={styles.CustomProductImage_Wrapper}>
      <div className={styles.CustomProductImage_SwiperContainer}>
        <PrevArrow
          role="button"
          aria-label="Previous slide"
          className={`${styles.CustomProductImage_SwiperArrow} ${prevArrowClass}`}
        />
        <Swiper
          modules={[Navigation, Pagination]}
          style={{ width: '100%', }}
          className={styles.CustomProductImage_SwiperSlide}
          {...defaultSwipeOptions}
          autoHeight={false}
          pagination={{ clickable: true }}
        >
          {bannersList?.map((item, index) => (
            <SwiperSlide className={styles.CustomProductImage_SwiperSlideItem} key={index}>
              <img
                style={{ width: "100%" }}
                src={item}
                alt="produto"
              />
              <div className={styles.Banner__Container}> 
                <h1 className={styles.Banner__Title}>Promoções de Outono</h1>
                <small className={styles.Banner__Text}>
                  Confiras os melhores looks para combinar com você nesse Outono
                </small>
                <button className={styles.Banner__Button} type="button">Conferir</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <NextArrow
          role="button"
          aria-label="Next slide"
          className={`${styles.CustomProductImage_SwiperArrow} ${nextArrowClass}`}
        />
      </div>
    </div>
  );
};

const PrevArrow = (props) => (
  <button {...props}>
    <svg
      style={{ transform: 'rotate(180deg)' }}
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      className="vtex-store-components-3-x-caretIcon vtex-store-components-3-x-caretIcon--image-producto"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use href="#nav-caret--right" xlinkHref="#nav-caret--right" />
    </svg>
  </button>
);

const NextArrow = (props) => (
  <button {...props}>
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      className="vtex-store-components-3-x-caretIcon vtex-store-components-3-x-caretIcon--image-producto"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use href="#nav-caret--right" xlinkHref="#nav-caret--right" />
    </svg>
  </button>
);

export { Banners };
