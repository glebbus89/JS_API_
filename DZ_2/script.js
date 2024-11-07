const sliderElement = document.querySelectorAll('.slider_element');
// console.log(simSlider);
const dotElement = document.querySelectorAll('.dot');

let slideIndex = 0;

function sliderChange(index) {
    sliderElement.forEach(slider_element => slider_element.classList.remove('active'));
    sliderElement[index].classList.add('active');
    
    dotElement.forEach(dot => dot.classList.remove('active'));
    dotElement[index].classList.add('active');
}


document.getElementById('btn_left').addEventListener('click', () => {
    
    slideIndex = (slideIndex + 1) % sliderElement.length;
    sliderChange(slideIndex);

});


document.getElementById('btn_right').addEventListener('click', () => {

    slideIndex = (slideIndex - 1 + sliderElement.length) % sliderElement.length;
    sliderChange(slideIndex);

});

dotElement.forEach((dot, index) => { 
    dot.addEventListener('click', () => {   
        slideIndex = index;
        sliderChange(slideIndex);
    });
});
sliderChange(slideIndex);



