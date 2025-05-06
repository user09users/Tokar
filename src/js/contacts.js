import useTocarServices from "../services/services";

const contacts = () => {

  if (window.location.pathname === '/contacts.html' ||
    window.location.pathname === '/contacts'
  ) {
    const { getData } = useTocarServices();
    getData('http://localhost:3000/contacts')
      .then(data => {
        if (!Array.isArray(data)) {
          console.error("Expected an array, got:", data);
          return;
        }
        const contactsNav = document.querySelector('.contacts__nav');

        let contactsItems = '';

        data.forEach(({ type, icon, alt, items, buttonText, socials }) => {
          let contactItemContent = `
        <li class="contacts__item">
          <div class="contacts__item-block">
            <h4 class="contacts__item-title title-fw400">${type}:</h4>
      `;

          if (items) {
            items.forEach(({ label, value }) => {
              contactItemContent += `
            <div class="contacts__item-elem">
              <div class="contacts__item-elem-name">${label}</div>
              <div class="contacts__item-elem-link">${value}</div>
            </div>
          `;
            });
          }

          if (socials) {
            let socialItems = '';
            socials.forEach(({ name, href, icon, alt }) => {
              socialItems += `
            <li class="social__list-item social__list-item_big ${name}">
              <a href="${href}" class="${name}">
                <img src="${icon}" alt="${alt}">
              </a>
            </li>
          `;
            });

            contactItemContent += `
          <ul class="social__list">
            ${socialItems}
          </ul>
        `;
          }

          contactItemContent += `
        <a class="contacts__item-button">${buttonText}</a>
        </div>
        <img class="contacts__item-img" src="${icon}" alt="${alt}">
        </li>
      `;

          contactsItems += contactItemContent;
        });

        const contactsWrapper = document.createElement('div');
        contactsWrapper.classList.add('contacts__contacts');
        contactsWrapper.innerHTML = `
      <h3 class="contacts__contacts-title title-fw400">
        Связаться с компанией TokarMebel вы сможете с помощью одного из этих способов:
      </h3>
      <ul class="contacts__contacts-list">
        ${contactsItems}
      </ul>
      <div class="contacts__addr">
                        <div class="contacts__addr-addr text-fw400">
                            Компания TokarMabel находится по адресу: <br>
                            <span class="text-fw700">Украина, Тячевский район. г. Тячев,ТЦ "Стиль"</span>
                        </div>
                        <a href="#" class="contacts__addr-route">Проложить маршрут</a>
                    </div>
    `;

        const wrapper = document.querySelector('.contacts__wrapper');
        if (wrapper) {
          wrapper.insertBefore(contactsWrapper, contactsNav);
        } else {
          console.error('Element .contacts__wrapper not found in DOM');
        }
      })
      .catch(error => {
        console.error('Error fetching contacts data:', error);
      });
  }


};

export default contacts;
