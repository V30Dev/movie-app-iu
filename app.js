const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
    const movieList = movieLists[index];
    const wrapper = movieList.parentElement;
    const items = movieList.querySelectorAll(".movie-list-item");

    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = parseInt(getComputedStyle(movieList).gap) || 0;

    const totalItems = items.length;
    const itemsPerView = Math.floor(wrapper.offsetWidth / (itemWidth + gap));
    const maxIndex = Math.ceil(totalItems - itemsPerView); // <- clave

    let currentIndex = 0;

    arrow.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reinicia al principio
        }

        const translateX = currentIndex * (itemWidth + gap);
        movieList.style.transform = `translateX(-${translateX}px)`;
    });
});

//TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar, .navbar-container, .sidebar, .left-menu-icon, .toggle, .toggle-ball, .movie-list-item-title, .movie-list-item-desc")

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
})