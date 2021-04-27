import "../../index.css";

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

const Header = ({ mainPage, changePage }) => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="menu">
          <a href="/glavnaya" className="logo__link">
            <span className="logo menu__log">
              Frontend <span className="logo__text--color">Job</span>
            </span>
          </a>

          <nav className="nav menu__nav" data-menu>
            <a
              href="#"
              className={`nav__item ${mainPage ? "active" : ""}`}
              onClick={() => changePage(true)}
            >
              Поиск вакансий
            </a>
            <a
              href="#"
              className={`nav__item ${mainPage ? "" : "active"}`}
              onClick={() => changePage(false)}
            >
              Избранные вакансии
            </a>
          </nav>

          <div className="header__mobile--menu">
            <input
              type="checkbox"
              id="checkbox1"
              className="checkbox1 visuallyHidden"
            />
            <label htmlFor="checkbox1">
              <div className="hamburger hamburger1" data-btn-mobile-menu>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
