import JustValidate from 'just-validate';
import useTocarServices from "../../services/services";

const modal = () => {
    const { postData } = useTocarServices();

    const modal = document.querySelector('[data-consultation]');
    const closeBtn = document.querySelector('[data-close]');
    const overlay = document.querySelector('.modal__overlay');
    const forms = document.querySelectorAll('[data-form]');

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
            openModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if (
            e.target === closeBtn ||
            e.target === overlay ||
            e.target.getAttribute('data-close') === ''
        ) {
            closeModal();
        }
    });

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            openModal();
            window.removeEventListener('scroll', openModal);
        }
    });

    // Loop through all forms
    forms.forEach((form) => {
        const validate = new JustValidate(form);

        const phoneField = form.querySelector('[data-phone]');
        const nameField = form.querySelector('[data-name]');

        if (nameField) {
            validate.addField('[data-name]', [
                { rule: 'required' },
                { rule: 'minLength', value: 2 },
            ], {
                errorsContainer: form.querySelector('.name-error-message'),
            });
        }

        if (phoneField) {
            validate.addField('[data-phone]', [
                { rule: 'required' },
                { rule: 'number' },
                { rule: 'minLength', value: 10 },
                { rule: 'maxLength', value: 12 },
            ], {
                errorsContainer: form.querySelector('.phone-error-message'),
            });
        }

        validate.onSuccess((event) => {
            event.preventDefault();
            closeModal();

            const statusMessage = document.createElement('img');
            statusMessage.src = '/src/icons/spinner.svg';
            statusMessage.style.cssText = `
                display: block;
                margin: 20px auto;
                max-width: 50px;
            `;
            form.after(statusMessage);

            const formData = new FormData(form);
            const json = Object.fromEntries(formData.entries());

            postData('http://localhost:3000/requests', json)
                .then(() => {
                    showThanksModal('Спасибо! Скоро мы с вами свяжемся.');
                })
                .catch(() => {
                    showThanksModal('Что-то пошло не так...');
                })
                .finally(() => {
                    form.reset();
                    statusMessage.remove();
                });
        });
    });

    function showThanksModal(text) {
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

        setTimeout(closeModal, 3000);

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
