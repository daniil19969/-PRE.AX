// Делаем один клик на все события
document.addEventListener('click', e => {

    const target = e.target;
    
    // Делаем клик по dropdown по способу привязки data атрибута
    if (target.closest('[data-dropdown-target]')) {
        const dropdownId = e.target.dataset.dropdownTarget;
        const dropdown = document.querySelector(`[data-dropdown=${dropdownId}]`);

        dropdown.classList.toggle('dropdown_active');
    }

    // Делаем клик по избранному
    if (target.closest('[data-favorite]')) {
        const parentTarget = target.closest('[data-favorite]');
        parentTarget.classList.toggle('favorite__on');
    }

    // Клик в мобильном меню по гамбургеру
    if (target.closest('[data-btn-mobile-menu]')) {
        const parentTarget = target.closest('[data-btn-mobile-menu]');
        parentTarget.classList.toggle('hamburger_active');

        const menu = document.querySelector('[data-menu]');
        menu.classList.toggle('menu_active');
    }

});