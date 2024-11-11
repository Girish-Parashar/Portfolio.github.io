(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

    // Check if 'views' exists in localStorage
    if (!localStorage.getItem('views')) {
        localStorage.setItem('views', 1); // First visit
    } else {
        let views = parseInt(localStorage.getItem('views')) + 1;
        localStorage.setItem('views', views); // Increment view count
    }

    // Display the view count
    document.getElementById('view-count').textContent = 'Views: ' + localStorage.getItem('views');
