document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

        sideBar.querySelectorAll(".tabs__button").forEach(button => {
            button.classList.remove("tabs__button--active");
        });

        tabsContainer.querySelectorAll(".tabs__content").forEach(button => {
            button.classList.remove("tabs__content--active");
        });

        button.classList.add("tabs__button--active");
        tabToActivate.classList.add("tabs__content--active");
    });
});

const smallImages = document.querySelectorAll(".small");
const close = document.querySelectorAll(".close");
const fullImagesWrapper = document.querySelector(".image__full");
const screenWidth = window.outerWidth;
console.log(screenWidth);

if (screenWidth > 767) {

    smallImages.forEach(item => {
        item.addEventListener("click", () => {
            const fullImage = fullImagesWrapper.parentElement;
            const imageNumber = item.dataset.forImage;
            const imageToActivate = fullImage.querySelector(`.image[data-image="${imageNumber}"]`);

            fullImagesWrapper.classList.add("active");
            imageToActivate.classList.add("image__active");

        });

    });


    close.forEach(item => {
        item.addEventListener("click", () => {
            const closeImage = document.querySelectorAll(".image").forEach(item => {
                item.classList.remove("image__active");
            })

            fullImagesWrapper.classList.remove("active");

        });
    });

}
