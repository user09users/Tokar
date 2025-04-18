const search = () => {
    const input = document.getElementById('search');
    const cards = document.querySelectorAll('.catalogSecondPage__item');

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('.catalogSecondPage__item-title');
            const text = title.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Make sure it's triggered when DOM is ready
    document.addEventListener('DOMContentLoaded', search);

};

export default search;