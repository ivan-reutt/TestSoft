document.addEventListener("DOMContentLoaded", (event) => {
    const body = document.querySelector('body');
    const burger = document.querySelector('.navbar__burger');
    const burgerMenu = document.querySelector('.navbar__list');
    const systemTypeListWrapper = document.querySelector('.select__list__wrapper');

    const hideBurgerMenu = () => {
        burgerMenu.className = 'navbar__list';
        burger.className = 'navbar__burger'
    };

    const hideDropdownList = () => {
        systemTypeListWrapper.className = 'select__list__wrapper';
    };

    body.addEventListener('click', (e) => {
        if (!e.target.classList.contains('navbar__burger') && !e.target.closest('.navbar__list')) {
            hideBurgerMenu();
        }

        if (!e.target.closest('#systemType')) {
            hideDropdownList();
        }
    });

    const initBurgerMenu = () => {
        burger.addEventListener('click', (e)=>{
            if(e.target.classList.contains('navbar__burger') && !burgerMenu.classList.contains('active')) {
                burgerMenu.classList.add('active');
                burger.classList.add('active');
            } else if (e.target.classList.contains('navbar__burger') && burgerMenu.classList.contains('active')) {
                hideBurgerMenu();
            }
        });

        burgerMenu.addEventListener('click', (e) => {
            const burgerItem = e.target;
            if(burgerItem.classList.contains('navbar__link')) {
                hideBurgerMenu();
            }
        });
    }

    const initFormDropdown = () => {
        const systemType = document.querySelector('#systemType');
        const selectList = document.querySelector('.select__list');
        const systemTypeValue = document.querySelector('#systemTypeValue');
        const systemTypeTitle = document.querySelector('.select__item.title');
        systemType.addEventListener('click', (e) => {
            if (!systemTypeListWrapper.classList.contains('active') && !e.target.classList.contains('select__item')) {
                systemTypeListWrapper.classList.add('active');
            }
        });
        systemTypeTitle.addEventListener('click', (e) => {
            hideDropdownList()
        });
        selectList.addEventListener('click', (e) => {
            const selectItem = e.target;
            console.log(systemTypeValue);
            if (selectItem.classList.contains('select__item')) {
                systemTypeValue.textContent = selectItem.textContent;
                systemTypeListWrapper.className = 'select__list__wrapper';
            }
        });
    }

     const initSlider = () => {

        const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        const slider = document.getElementById("myRange");
        const output = document.getElementById("demo");
        output.innerHTML = slider.value + ' %';

        if (isIE11) {
            slider.onchange = (e) => {
                output.innerHTML = e.target.value + ' %';
            }
        } else {
            slider.oninput = (e) => {
                output.innerHTML = e.target.value + ' %';
            }
        }
    }

    initBurgerMenu();
    initFormDropdown();
    initSlider();
});
