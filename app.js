const home_button = document.querySelector('.home')
home_button.addEventListener("click", () => {
    scroll({top: 100, behavior: "smooth"})
});

const books_button = document.querySelector('.books')
books_button.addEventListener("click", () => {
    scroll({top: 820, behavior: "smooth"})
});

const contact_button = document.querySelector('.contact3')
contact_button.addEventListener("click", () => {
    scroll({top: 1500, behavior: "smooth"})
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

const hiddenElements = window.document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

