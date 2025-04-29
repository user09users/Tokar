const modal = () => {

    const openBtn = document.querySelectorAll('[data-openModal');
    const closeBtn = document.querySelector('[data-close]');
    const modal = document.querySelector('[data-consultation]');
    const overlay = document.querySelector('.modal__overlay');
    const forms = document.querySelectorAll('[data-form]');

    const modalWrapper = document.querySelector('.modal__wrapper');

    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    openBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target == closeBtn || e.target == overlay || e.target.getAttribute('data-close') == '') {
            closeModal();
        };
    });

    const showModalByScroll = () => {

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    window.addEventListener('scroll', showModalByScroll);

    const message = {
        loading: '/src/icons/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 20px auto;
            max-width: 50px;
        `;

            form.appendChild(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            const formData = new FormData(form);
            const object = {};
            formData.forEach((value, key) => object[key] = value);
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                statusMessage.remove();
                if (request.status === 200) {
                    showThanksModal(message.success);
                    form.reset();
                } else {
                    showThanksModal(message.failure);
                }
            });
        });
    }

    function showThanksModal(message) {

        // Clear the wrapper content instead of hiding it and appending another
        modalWrapper.innerHTML = `
        <span data-close class="modal__close icon-cancel"></span>
        <img src="/src/img/cardPage/cardPage-man.jpeg" alt="cardPage-man" class="modal__img">
        <div class="modal__content">
            <h3 class="modal__title title-fw400">${message}</h3>
        </div>
    `;

        openModal(); // just show the modal again if hidden

        // Close modal after delay and reset wrapper content
        setTimeout(() => {
            closeModal();

            // Optional: restore original modal HTML if needed
            restoreOriginalModalContent();
        }, 3000);
    }

    function restoreOriginalModalContent() {
        modalWrapper.innerHTML = `
        <span data-close class="modal__close icon-cancel"></span>
        <img src="/src/img/cardPage/cardPage-man.jpeg" alt="cardPage-man" class="modal__img">
        <div class="modal__content">
            <h3 class="modal__title title-fw400">Получите ответы на все свои вопросы за 15 минут</h3>
            <form action="#" data-form>
                <div class="input">
                    <div class="input-language">
                        <span></span>
                        <span></span>
                        <span class="icon-down-open"></span>
                    </div>
                    <input required class="input-input" type="tel" name="phone" placeholder="+38 XXX XXX XX XX">
                </div>
                <button type='submit' class="button-big modal__button">Заказать</button>
            </form>
            <div class="modal__text">Отправляя данные, Вы соглашаетесь на обработку
                <span>персональных данных</span>
            </div>
        </div>
    `;

        // Re-bind form listener again since you removed and reinserted it
        const newForm = modalWrapper.querySelector('[data-form]');
        postData(newForm);
    }
};

export default modal;

