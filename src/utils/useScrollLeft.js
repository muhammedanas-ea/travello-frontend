export const propertyScrollLeft = (scroll,setScroll,actionId) => {
    const container = document.getElementById(actionId);
    setScroll(scroll - container.offsetWidth * 0.4);
    container.scrollLeft -= container.offsetWidth * 0.4;
};