import useTocarServices from "../services/services";

const itemDescr = () => {

    if (
        window.location.pathname === '/cases' ||
        window.location.pathname === '/cases.html'
    ) {
        const { getData } = useTocarServices();

        getData("http://localhost:3000/cards")
            .then(data => {
                // Use the first card (or loop through all if needed)
                const card = data[0]; // Or use find() if you filter by ID

                // Intro
                const introBlocks = document.querySelectorAll(".casesInfo__intro-block");
                if (introBlocks.length >= 2) {
                    introBlocks[0].querySelector("span").textContent = card.intro.technologies;
                    introBlocks[1].querySelector("span").textContent = card.intro.constructionTime;
                }

                // Description
                const descrWrapper = document.querySelector(".casesInfo__descr-ul");
                card.description.forEach(({ label, value }) => {
                    const li = document.createElement("li");
                    li.classList.add("casesInfo__descr-item");
                    li.innerHTML = `<div>${label}</div><span>${value}</span>`;
                    descrWrapper.appendChild(li);
                });

                // Features
                const featuresWrapper = document.querySelector(".casesInfo__images-ul");
                card.features.forEach(({ icon, alt, text }) => {
                    const li = document.createElement("li");
                    li.classList.add("casesInfo__images-item");
                    li.innerHTML = `<img src="${icon}" alt="${alt}"><div>${text}</div>`;
                    featuresWrapper.appendChild(li);
                });
            });
    }

};

export default itemDescr;
