 const starsContainer = document.querySelector(".stars");

        function createStars(num) {
            for (let i = 0; i < num; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = Math.random() * 100 + "%";
            star.style.left = Math.random() * 100 + "%";
            star.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
            star.style.width = star.style.height = (Math.random() * 3 + 1) + "px"; 
            starsContainer.appendChild(star);
            }
        }

        createStars(100);