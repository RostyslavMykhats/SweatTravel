function tabsAnimals() {
    const TABS = document.querySelectorAll('.menu__nav_item');
    const CONTENT = document.querySelectorAll('.swiper-container-cake');

    TABS.forEach((tab) => {
        tab.addEventListener('click', () => {
            TABS.forEach((tab) => {
                tab.classList.remove('selected');
            })
            tab.classList.add('selected');
            // get data-atribute
            const DATA_ATRIBUTE = tab.getAttribute('data-products');
            CONTENT.forEach((item) => {
                item.classList.add('d-none');
                if (item.getAttribute('data-products') == DATA_ATRIBUTE) {
                    item.classList.remove('d-none');
                }
            });
        })
    })
};

tabsAnimals();