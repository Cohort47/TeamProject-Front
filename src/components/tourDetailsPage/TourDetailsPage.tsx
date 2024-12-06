import React, { useState } from "react";
import styles from "./TourDetailsPage.module.css";

const TourDetailsPage: React.FC = () => {
  const allImages: string[] = [
    "https://media.istockphoto.com/id/1084918276/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2-%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%BB%D1%8F%D0%B6.jpg?s=2048x2048&w=is&k=20&c=DvpHDMt2txcv2SZI9ZnImzlcLDHPkagNIjY_I9unVuo=",
    "https://media.istockphoto.com/id/1364624347/de/foto/junge-frau-beim-schnorcheln-neben-einer-gr%C3%BCnen-schildkr%C3%B6te-in-einem-klaren-blauen-wasser.jpg?s=2048x2048&w=is&k=20&c=BruGqjmOvoWIRk4K6VCQMbId4dZCju2Fbp8ELosVw2c=",
    "https://media.istockphoto.com/id/1813433942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B0%D0%B4-%D0%B8%D0%BD%D0%B4%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%BC-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%8B.jpg?s=2048x2048&w=is&k=20&c=gYCHxZe2T5lBnXUZwYJxsmYdT8Q0tfZqyDi-oiFNwUc=",
    "https://media.istockphoto.com/id/624215532/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8F%D0%B6-%D0%BD%D0%B0-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5-%D0%BA%D0%B0%D0%BD%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%8B-%D0%B8%D1%8E%D0%BD%D1%8C-2016.jpg?s=2048x2048&w=is&k=20&c=OsuHPVSLBb3iT_DWFLb3BwqGqwsG7wUHXArrP-vhz4o=",
    "https://media.istockphoto.com/id/2153741067/de/foto/boardwalk-into-tropical-paradise-island.jpg?s=2048x2048&w=is&k=20&c=t1ns6T2wvkqNst4U8wh92eOd-emY1mG2nU4xoTt4_yo=",
    "https://media.istockphoto.com/id/1151676452/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5-%D1%81-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0%D0%BC%D0%B8.jpg?s=2048x2048&w=is&k=20&c=t3wtof7BqRozYPy_xXOrOTdanK_tM8Q-FWfuh3IraxU=",
    "https://media.istockphoto.com/id/1151658410/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5-%D1%81-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0%D0%BC%D0%B8.jpg?s=2048x2048&w=is&k=20&c=Bpx3Y4B-kxvFm5uqmA-NN0EAotb94cQ_0KZQUZDIwKc=",
    "https://media.istockphoto.com/id/1479109787/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B6%D0%B8%D0%B2%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D1%8B%D0%B9-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D0%B9%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D1%87%D0%B8%D1%81%D1%82%D1%8B%D0%B9-%D0%B2%D0%BE%D0%B4%D0%BE%D0%B5%D0%BC-%D1%81-%D0%BF%D1%8B%D1%88%D0%BD%D1%8B%D0%BC-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%BC-%D0%B2%D0%B4%D0%B0%D0%BB%D0%B8.jpg?s=2048x2048&w=is&k=20&c=7WeIc3uzwGHr8XN5n6iQQP3NC5V5qh3zbx8tqfpxb_E=",
    "https://media.istockphoto.com/id/1084918276/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2-%D1%80%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%BB%D1%8F%D0%B6.jpg?s=2048x2048&w=is&k=20&c=DvpHDMt2txcv2SZI9ZnImzlcLDHPkagNIjY_I9unVuo=",
  ];

  const [images, setImages] = useState<string[]>(allImages.slice(0, 6));
  const [showAll, setShowAll] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>(images[0]);

  const handleImageClick = (event: React.MouseEvent): void => {
    const imageWidth = event.currentTarget.clientWidth;
    const clickX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;

    if (clickX < imageWidth / 2) {
      showPreviousImage();
    } else {
      showNextImage();
    }
  };

  const showPreviousImage = () => {
    const currentIndex = allImages.indexOf(mainImage);
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    setMainImage(allImages[previousIndex]);
  };

  const showNextImage = () => {
    const currentIndex = allImages.indexOf(mainImage);
    const nextIndex =
      currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    setMainImage(allImages[nextIndex]);
  };

  const handleShowAllClick = (): void => {
    setShowAll(true);
    setImages(allImages);
    setMainImage(allImages[0]);
  };

  const handleHideImagesClick = (): void => {
    setShowAll(false);
    setImages(allImages.slice(0, 6));
    setMainImage(allImages[0]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hotelInfo}>
        <div className={styles.hotelDetails}>
          <h2 className={styles.title}>Coffee Inn Hostel Berlin</h2>
          <p className={styles.address}>Адрес: Берлин, Германия</p>
        </div>
        <div className={styles.price}>
          <p className={styles.priceText}>€50 / ночь</p>
        </div>
      </div>

      <div className={styles.gallery}>
        <div className={styles.mainImageWrapper}>
          <button
            className={`${styles.arrowButton} ${styles.leftArrow}`}
            onClick={showPreviousImage}
          ></button>

          <div className={styles.mainImage} onClick={handleImageClick}>
            <img src={mainImage} alt="Main Tour" className={styles.image} />
          </div>

          <button
            className={`${styles.arrowButton} ${styles.rightArrow}`}
            onClick={showNextImage}
          ></button>
        </div>

        <div className={styles.smallImages}>
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small ${index + 1}`}
              className={styles.smallImage}
              onClick={() => setMainImage(image)}
            />
          ))}
          {!showAll && images.length < allImages.length && (
            <div className={styles.morePhotos} onClick={handleShowAllClick}>
              +{allImages.length - images.length} фотографий
            </div>
          )}
          {showAll && (
            <div className={styles.morePhotos} onClick={handleHideImagesClick}>
              Скрыть фото
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Coffee Inn Hostel Berlin - это хостел в городе Берлин, в 2,9 км от
          такой достопримечательности, как Станция метро Zoologischer Garten. Из
          окон открывается вид на город. В числе прочих удобств — общая кухня и
          общий лаундж, а также бесплатный Wi-Fi на всей территории. Этот
          вариант размещения с номерами для некурящих располагается в 1,9 км от
          следующей достопримечательности: Берлинская филармония. B Coffee Inn
          Hostel Berlin в каждом номере имеется платяной шкаф. Гостям Coffee Inn
          Hostel Berlin предоставляются постельное белье и полотенца. Сотрудники
          стойки регистрации говорят на арабском, на немецком, на английском и
          на русском. Coffee Inn Hostel Berlin располагается в 3,4 км и 3,5 км
          соответственно от таких достопримечательностей, как Бульвар
          Курфюрстендамм и Музей «Топография террора». Аэропорт Берлин -
          Бранденбург имени Вилли Брандта находится в 21 км. Парам особенно
          нравится расположение - они оценили проживание в этом районе вдвоем на
          9,8.
        </p>
        <button className={styles.bookButton}>Забронировать</button>
      </div>
    </div>
  );
};

export default TourDetailsPage;
