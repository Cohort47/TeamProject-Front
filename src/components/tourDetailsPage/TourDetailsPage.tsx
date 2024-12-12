import React, { useEffect, useState } from "react";
import styles from "./TourDetailsPage.module.css";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

//Tour from bd
interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  startDate: string;
  endDate: string;
  state: string;
  photoLinks: string[];
  country: string;
  city: string;
  rating: 5;
}

const TourDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tourDetails, setTourDetails] =  useState<Tour| undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] =useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>('');
  const [, setIsDelayedLoading] = useState<boolean>(false); 




  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/tours/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tour details");
        }
        const data = await response.json();
        setTourDetails(data);
        setImages(data.photoLinks);
        setMainImage(data.photoLinks[0]);
        
        setTimeout(() => {
          setIsDelayedLoading(true); 
        }, 4000);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]);


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
    const currentIndex = images.indexOf(mainImage);
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setMainImage(images[previousIndex]);
  };

  const showNextImage = () => {
    const currentIndex = images.indexOf(mainImage);
    const nextIndex =
      currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setMainImage(images[nextIndex]);
  };

  const handleShowAllClick = (): void => {
    setShowAll(true);
    setImages(images);
    setMainImage(images[0]);
  };

  const handleHideImagesClick = (): void => {
    setShowAll(false);
    setImages(images.slice(0, 6));
    setMainImage(images[0]);
  };

  if(error){
    console.log(error);
  }

  if (loading || !tourDetails) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
    <div className={styles.hotelInfo}>
      <div className={styles.hotelDetails}>
        <h2 className={styles.title}>{tourDetails.title}</h2>
        <p className={styles.address}>
          {tourDetails.city}, {tourDetails.country}
        </p>
      </div>
      <div className={styles.price}>
        <p className={styles.priceText}>{tourDetails.price} €</p>
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
        {images.length > 6 && !showAll && (
          <div className={styles.morePhotos} onClick={handleShowAllClick}>
            +{images.length - 6} фотографий
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
      <p className={styles.description}>{tourDetails.description}</p>
      <button className={styles.bookButton}>Забронировать</button>
    </div>
  </div>
  );
};

export default TourDetailsPage;
