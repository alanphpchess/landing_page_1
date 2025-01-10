jQuery(document).ready(function () {
    const thumbnails = document.getElementsByClassName("thumbnail");
    const slider = document.getElementById("slider");
    const nextBtn = document.getElementById("slide-right");
    const prevBtn = document.getElementById("slide-left");

    nextBtn.addEventListener("click", () => {
        scrollAmount = 0;
        let slideTimer = setInterval(() => {
            slider.scrollLeft += 10;
            scrollAmount += 10;
            if (scrollAmount >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    });

    prevBtn.addEventListener("click", () => {
        scrollAmount = 0;
        let slideTimer = setInterval(() => {
            slider.scrollLeft -= 10;
            scrollAmount += 10;
            if (scrollAmount >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    });


  

});

