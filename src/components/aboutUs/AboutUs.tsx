import React from "react";
import styles from "./AboutUs.module.css";
import teamPhoto from "./teamPhoto.png";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs} id="about-us">
      {/* <div className={styles.titleContainerTest}> */}
      <h2 className={styles.title}>BERLIN TRAVEL AGENCY</h2>
      {/* </div> */}

      <div className={styles.photoContainer}>
        <img src={teamPhoto} alt="Our Team" className={styles.teamPhoto} />
      </div>
      <div className={styles.textContainer}>
        <p>
          Мы предлагаем эксклюзивные туры и услуги, тщательно подбираем
          партнеров и работаем с высококлассными гидами, чтобы обеспечить нашим
          клиентам первоклассный опыт. Наша цель - показать вам лучшие стороны
          каждой страны, организовать поездки, которые запомнятся на всю жизнь,
          и предоставить высокий уровень сервиса, который превзойдет ваши
          ожидания. Мы верим, что путешествие - это больше, чем просто поездка.
          Это возможность узнать новое, испытать новые эмоции и открыть для себя
          мир по-новому. Мы здесь, чтобы сделать ваше путешествие по-настоящему
          особенным.
        </p>
        <p>
          Berlin Travel Agency - это команда страстных путешественников и
          экспертов в организации туров, которые стремятся создавать для своих
          клиентов уникальные и незабываемые впечатления. Наш офис находится в
          самом сердце Берлина, и мы гордимся тем, что помогаем людям открывать
          для себя мир, делая каждое путешествие легким, увлекательным и
          безопасным.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
