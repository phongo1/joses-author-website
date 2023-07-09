const home_button = document.querySelector('.home')
home_button.addEventListener("click", () => {
    scroll({top: 55, behavior: "smooth"})
});

const books_button = document.querySelector('.books')
books_button.addEventListener("click", () => {
    scroll({top: 770, behavior: "smooth"})
});

const contact_button = document.querySelector('.contact3')
contact_button.addEventListener("click", () => {
    scroll({top: 1400, behavior: "smooth"})
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.id === "nowline") {
                entry.target.classList.add('expand')
            }
            else if (entry.target.id === "slide_right") {
                entry.target.classList.add('slide_right')
            }
            else if (entry.target.id === "slide_left") {
                entry.target.classList.add('slide_left')
            }
            
        }
        // else {
        //     entry.target.classList.remove('show');
        // }

        else {
            entry.target.classList.remove('expand')
            entry.target.classList.remove('slide_right')
            entry.target.classList.remove('slide_left')
        }
    });

});

const hiddenElements = window.document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

