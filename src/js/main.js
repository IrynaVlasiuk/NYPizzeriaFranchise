function changeOpacitySlider(images, indexImageDisplayed) {
    for(let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }

    images[indexImageDisplayed].style.opacity = 1;
}

function startSlider(element) {
    let indexImageDisplayed = 0;
    setInterval(() => {
        let images = document.querySelectorAll(element);
        indexImageDisplayed++;

        if(indexImageDisplayed == (images.length-1)) {
            indexImageDisplayed = 0;
        }
        changeOpacitySlider(images, indexImageDisplayed);
    }, 3000);
}

startSlider("#sliderBlockFranchiseDelivery .slider-item");
startSlider("#sliderBlockDishes .slider-item");

function observerAnimation(toggleClass, elementsClass) {
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle(toggleClass, entry.isIntersecting);
        });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 };

    const elements = document.querySelectorAll(elementsClass);

    elements.forEach(el => {
        observer.observe(el, options);
    });
}

observerAnimation("move-from-left", ".animation-move-from-left-1");
observerAnimation("move-from-left", ".animation-move-from-left-2");
observerAnimation("move-from-right", ".animation-move-from-right-1");
observerAnimation("move-from-right", ".animation-move-from-right-2");
observerAnimation("move-from-right", ".animation-move-from-right-3");
observerAnimation("transition-visibility", ".element-transition-visibility");
observerAnimation("scale-up-to", ".animation-scale-up-to");

