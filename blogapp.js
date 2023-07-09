const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('postcardhover');
        }
        else {
             entry.target.classList.remove('postcardhover');
        }

    });

});

const hiddenElements = window.document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




