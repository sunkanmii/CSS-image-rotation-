const changeOrientationValue = document.querySelector(".orientation-value");
const rootElement = document.querySelector(':root');
const rootStyle = getComputedStyle(rootElement);

setInterval(() => {
    changeOrientationValue.textContent = changeOrientationValue.textContent === "from-image" ?  "none" : "from-image";
    rootElement.style.cssText = `--image-orientation-value: ${changeOrientationValue.textContent}`
}, 1450);
