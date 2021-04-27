import "../../index.css";
import logo1 from "../../img/vacancy-logo/1.png";
import logo2 from "../../img/vacancy-logo/2.png";
import logo3 from "../../img/vacancy-logo/3.png";
import logo4 from "../../img/vacancy-logo/4.png";
import CardListItem from "../card-list-item";
import Vacancy from "../vacancy";

const CardList = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content">
          <div className="row">
            <div className="col-40">
              <div className="hero__content--vacancy">
                <CardListItem
                  image={logo1}
                  name="Интернет Люди"
                  position="Front-end Разработчиĸ"
                  location="Москва"
                  tags="jQuery, JavaScript, CSS3, React, Git, Vue, Flexbox, HTML5"
                />
                <CardListItem
                  image={logo2}
                  name="GOOD CALL DEVELOPMENT"
                  position="React Developer (Middle/Senior)"
                  location="Москва"
                  tags="jQuery, JavaScript, CSS3, React, Git"
                />
                <CardListItem
                  image={logo3}
                  name="Winfinity"
                  position="Frontend developer (React)"
                  location="Москва"
                  tags="jQuery, JavaScript"
                />
                <CardListItem
                  image={logo4}
                  name="Diagnocat"
                  position="Frontend developer"
                  location="Москва"
                  tags="jQuery, JavaScript, CSS3, React, Git, Vue, Flexbox, HTML5"
                />
              </div>
            </div>
            <Vacancy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;
