import "../../index.css";

const Search = () => {
  // Делаем один клик на все события
  document.addEventListener("click", (e) => {
    const target = e.target;

    // Делаем клик по dropdown по способу привязки data атрибута
    if (target.closest("[data-dropdown-target]")) {
      const dropdownId = e.target.dataset.dropdownTarget;
      const dropdown = document.querySelector(`[data-dropdown=${dropdownId}]`);

      dropdown.classList.toggle("dropdown_active");
    }

    // Клик в мобильном меню по гамбургеру
    if (target.closest("[data-btn-mobile-menu]")) {
      const parentTarget = target.closest("[data-btn-mobile-menu]");
      parentTarget.classList.toggle("hamburger_active");

      const menu = document.querySelector("[data-menu]");
      menu.classList.toggle("menu_active");
    }
  });

  return (
    <div className="filter" id="filter">
      <div className="container">
        <div className="page__filter--form">
          <form className="filter__form">
            <div className="filter__form--block filter__form--block-city">
              <input name="city" id="city" type="text" placeholder="Москва" />
            </div>

            <div className="filter__form--block filter__form--block-shedule">
              <a
                href="#"
                id="shedule dropdownMenuButton"
                data-dropdown-target="schedule"
              >
                Гибкий график
              </a>
              <div
                id="myDropdown"
                className="dropdown-content dropdown"
                data-dropdown="schedule"
              >
                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice1" />
                  <label htmlFor="contactChoice1" className="label__radio">
                    Полный день
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input
                    type="radio"
                    className="radio"
                    id="contactChoice2"
                    defaultChecked
                  />
                  <label htmlFor="contactChoice2" className="label__radio">
                    Гибкий график
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice3" />
                  <label htmlFor="contactChoice3" className="label__radio">
                    Удаленная работа
                  </label>
                </div>
              </div>
            </div>

            <div className="filter__form--block filter__form--block-busyness">
              <a
                href="#"
                id="busyness dropdownMenuButton"
                data-dropdown-target="busyness"
              >
                Частичная занятость
              </a>
              <div
                id="myDropdown"
                className="dropdown-content dropdown"
                data-dropdown="busyness"
              >
                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice4" />
                  <label htmlFor="contactChoice4" className="label__radio">
                    Полная занятость
                  </label>
                </div>
                <div className="dropdown__button--group">
                  <input
                    type="radio"
                    className="radio"
                    id="contactChoice5"
                    defaultChecked
                  />
                  <label htmlFor="contactChoice5" className="label__radio">
                    Частичная занятость
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice6" />
                  <label htmlFor="contactChoice6" className="label__radio">
                    Проектная работа
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice7" />
                  <label htmlFor="contactChoice7" className="label__radio">
                    Стажировка
                  </label>
                </div>
              </div>
            </div>

            <div className="filter__form--block filter__form--block-years">
              <a
                href="#"
                id="years dropdownMenuButton"
                data-dropdown-target="years"
              >
                От 1 года до 3 лет
              </a>
              <div
                id="myDropdown"
                className="dropdown-content dropdown"
                data-dropdown="years"
              >
                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice8" />
                  <label htmlFor="contactChoice8" className="label__radio">
                    Нет опыта
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input
                    type="radio"
                    className="radio"
                    id="contactChoice9"
                    defaultChecked
                  />
                  <label htmlFor="contactChoice9" className="label__radio">
                    От 1 года до 3 лет
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice10" />
                  <label htmlFor="contactChoice10" className="label__radio">
                    От 3 до 6 лет
                  </label>
                </div>

                <div className="dropdown__button--group">
                  <input type="radio" className="radio" id="contactChoice11" />
                  <label htmlFor="contactChoice11" className="label__radio">
                    Более 6 лет
                  </label>
                </div>
              </div>
            </div>

            <div className="filter__form--block filter__form--block-price">
              <input
                name="price "
                id="price"
                type="text"
                placeholder="150 000 руб."
              />
            </div>

            <div className="filter__form--block filter__form--block-fltered">
              <a id="filter dropdownMenuButton" data-dropdown-target="filter">
                Фильтры
              </a>
              <div
                id="myDropdown"
                className="dropdown-content dropdown"
                data-dropdown="filter"
              >
                <div className="filtered__dropdown filtered__dropdown--income">
                  <label htmlFor="income">Доход</label>
                  <input
                    type="text"
                    name="income"
                    id="income"
                    placeholder="150 000"
                  />
                </div>

                <div className="filtered__dropdown filtered__dropdown--schedule">
                  <span>График работы</span>
                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice12"
                    />
                    <label htmlFor="contactChoice12" className="label__radio">
                      Полный день
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice13"
                      defaultChecked
                    />
                    <label htmlFor="contactChoice13" className="label__radio">
                      Гибкий график
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice14"
                    />
                    <label htmlFor="contactChoice14" className="label__radio">
                      Удаленная работа
                    </label>
                  </div>
                </div>

                <div className="filtered__dropdown filtered__dropdown--employment">
                  <span>Тип занятости</span>
                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice15"
                    />
                    <label htmlFor="contactChoice15" className="label__radio">
                      Полная занятость
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice16"
                      defaultChecked
                    />
                    <label htmlFor="contactChoice16" className="label__radio">
                      Частичная занятость
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice17"
                    />
                    <label htmlFor="contactChoice17" className="label__radio">
                      Проектная работа
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice18"
                    />
                    <label htmlFor="contactChoice18" className="label__radio">
                      Стажировка
                    </label>
                  </div>
                </div>

                <div className="filtered__dropdown filtered__dropdown--work">
                  <span>Опыт работы</span>
                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice19"
                    />
                    <label htmlFor="contactChoice19" className="label__radio">
                      Нет опыта
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice20"
                      defaultChecked
                    />
                    <label htmlFor="contactChoice20" className="label__radio">
                      От 1 года до 3 лет
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice21"
                    />
                    <label htmlFor="contactChoice21" className="label__radio">
                      От 3 до 6 лет
                    </label>
                  </div>

                  <div className="dropdown__button--group">
                    <input
                      type="radio"
                      className="radio"
                      id="contactChoice22"
                    />
                    <label htmlFor="contactChoice22" className="label__radio">
                      Более 6 лет
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="filter__form--submit">
              Поиск
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
