import useTocarServices from "../services/services";

const modal = () => {

    const closeBtn = document.querySelector('[data-close]');
    const modal = document.querySelector('[data-consultation]');
    const overlay = document.querySelector('.modal__overlay');
    const forms = document.querySelectorAll('[data-form]');

    const { postData } = useTocarServices();

    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-openModal]')) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
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
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 20px auto;
            max-width: 50px;
        `;

            form.after(statusMessage);
            const formData = new FormData(form);
            const json = Object.fromEntries(formData.entries());

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                    statusMessage.remove();
                });
        });
    }
    function showThanksModal(text) {
        // Remove old modal if exists
        const old = document.querySelector('.thanks-modal');
        if (old) old.remove();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('thanks-modal');
        thanksModal.innerHTML = `
            <div class="modal active" style="display: block;">
                <div class="modal__overlay" data-close></div>
                <div class="modal__wrapper">
                    <span data-close class="modal__close icon-cancel"></span>
                    <img src="/src/img/cardPage/cardPage-man.jpeg" alt="cardPage-man" class="modal__img">
                    <div class="modal__content">
                        <h3 class="modal__title title-fw400">${text}</h3>
                    </div>
                </div>
            </div>
        `;
        document.body.append(thanksModal);
        document.body.style.overflow = 'hidden';

        const closeModal = () => {
            thanksModal.remove();
            document.body.style.overflow = '';
        };

        // Auto close after 3 seconds
        setTimeout(closeModal, 3000);

        // Also close on click
        thanksModal.addEventListener('click', (e) => {
            if (
                e.target.getAttribute('data-close') != null ||
                e.target.classList.contains('modal__overlay')
            ) {
                closeModal();
            }
        });
    }
};

export default modal;

