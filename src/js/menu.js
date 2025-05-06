import useTocarServices from "../services/services";

const menu = () => {
    const { getData } = useTocarServices();

    getData('http://localhost:3000/menu')
        .then(data => {
            const container = document.querySelector('.menu__items');
            if (!container) return;

            data.forEach(({ title, items }) => {
                let itemsList = items.map(({ label, href }) => ` <li class="text-fw300"><a href="${href}">${label}</a></li>`).join('');

                const menuItem = document.createElement('li');
                menuItem.classList.add('menu__item');
                menuItem.innerHTML = `
                    <div class="menu__item-header">
                        <span class="menu__item-corner"><span class="icon-down-open"></span></span>
                        <div class="menu__item-name">${title}</div>
                        <span class="menu__item-corner"><span class="icon-down-open"></span></span>
                    </div>
                    <ul class="menu__item-content">
                        ${itemsList}
                    </ul>
                `;

                container.appendChild(menuItem);
            });
        });
};

export default menu;
