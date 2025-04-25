const modal = () => {

    const openBtn = document.querySelectorAll('.button');
    const closeBtn = document.querySelector('[data-close]');
    const modal = document.querySelector('[data-consultation]');
    const overlay = document.querySelector('.modal__overlay');

    openBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Disable page scroll
        });
    })

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

export default modal;

