import "../../index.css";
import logo3big from "../../img/vacancy-logo/3-big.png";

const Vacancy = () => {
  return (
    <div className="col-60">
      <div className="vacancy__preview">
        <div className="vacancy__preview--header">
          <a href="/5" className="vacancy__preview--logo">
            <img src={logo3big} alt="Winfinity" />
          </a>

          <div className="vacancy__preview--info">
            <h1 className="vacancy__preview--title">
              Frontend developer (React)
            </h1>
            <div className="vacancy__preview--location-name">
              <span className="vacancy__preview--company">Winfinity</span>
              <span className="vacancy__preview--location">Москва</span>
            </div>
          </div>
        </div>

        <div className="vacancy__preview--price">
          <h2>От 150 000 до 300 000 руб.</h2>
        </div>

        <div className="vacancy__preview--content">
          <p>
            Мы, <b>Winfinity</b>, занимаемся разработкой инновационных решений в
            области игорно-развлекательного контента.
          </p>

          <p>
            Для создания наших продуктов используются передовые технологии,
            среди которых: Computer Vision, Unreal Engine, Ultra Low Latency
            Video Streaming. У нас очень крутой и суперсовременный технопарк -
            от камер и света, до графических карт, которые почти невозможно
            найти.
          </p>

          <p>
            Сегодня мы на стадии активного развития. Мы создаём масштабный,
            технологически сложный и в тоже время очень интересный, глобальный
            проект - частью которого можете стать Вы!
          </p>

          <p className="text__sckill">
            <b>И если у Вас есть:</b>
          </p>

          <p>
            <span>опыт коммерческой разработки на JavaScript от 2 лет;</span>
            <span>опыт коммерческой разработки на React от 2 лет;</span>
            <span>опыт работы в команде с git;</span>
          </p>

          <p>
            опыт работы с любым сборщиком (webpack, gulp и т.д.). …то Вы именно
            тот, кого мы ищем!
          </p>

          <p>
            Обязательные знания:
            <br />
            <br />
            Typescript;
            <br />
            Webpack;
            <br />
            Styled-components;
            <br />
            GraphQL;
            <br />
            Express;
            <br />
            MongoDB;
            <br />
            WebSockets;
            <br />
            Docker.
            <br />
          </p>

          <p>
            После испытательного срока мы предлагаем:
            <br />
            возможную релокацию в столицу Латвии с помощью в оформлении всех
            необходимых документов;
            <br />
            бесплатную стоянку рядом с современным офисом в центре города;
            <br />
            медицинскую страховку;
            <br />
            абонемент в спортивный зал.
            <br />
            Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента,
            бизнеса, который уже не знает, чего хочет.
            <br />
            Мы за нестандартные идеи, профессиональный и творческий подход,
            отличные отношения в коллективе и результат.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
