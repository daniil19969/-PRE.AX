import "../../index.css";

document.addEventListener("click", (e) => {
  const target = e.target;

  // Делаем клик по избранному
  if (target.closest(".vacancy__info")) {
    const parentTarget = target.closest(".vacancy__card");
    console.log(parentTarget);
    parentTarget.classList.toggle("activity");
  }
  // Делаем клик по избранному
  if (target.closest("[data-favorite]")) {
    const parentTarget = target.closest("[data-favorite]");
    parentTarget.classList.toggle("favorite__on");
  }
});

const CardListItem = ({ image, name, position, location, tags }) => {
  return (
    <div className="vacancy__card ">
      <figure className="vacancy__card--image">
        <img src={image} alt={name} className="vacancy__cart--logo" />
      </figure>

      <div className="vacancy__info">
        <span className="vacancy__company--name">{name}</span>

        <h3 className="vacancy__company--position">{position}</h3>

        <span className="vacancy__company--location">{location}</span>

        <div className="vacancy__company--tags">
          {tags.split(", ").map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
      </div>

      <div className="vacancy__card--favorite">
        <svg
          className="favorite__off "
          data-favorite
          viewBox="0 0 20 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 1.66446C15.5477 -4.11405 29.418 5.99771 10 19C-9.41803 5.99898 4.45235 -4.11405 10 1.66446Z"
          />
        </svg>
      </div>

      <div className="vacancy__card--date">
        <span>29/03/2021</span>
      </div>
    </div>
  );
};

export default CardListItem;
