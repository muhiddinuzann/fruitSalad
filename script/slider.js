$(document).ready(function () {
    const slider = $('.cards');
    const productWidth = $('.aboutCard').outerWidth(true);
    const productCount = $('.aboutCard').length;
    let currentPosition = 0;

    function moveLeft() {
        if (currentPosition < 0) {
            currentPosition += productWidth;
            slider.css('transform', `translateX(${currentPosition}px)`);
        }
    }
    function moveRight() {
        if (currentPosition > -(productWidth * (productCount - 1))) {
            currentPosition -= productWidth;
            slider.css('transform', `translateX(${currentPosition}px)`);
        }
    }
    $('.left-button').click(moveLeft);
    $('.right-button').click(moveRight);
});