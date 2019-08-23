let slide = document.getElementById("slide")
let imageIndex = 0
const images = ['./resources/pictures/trinity.jpg',
'./resources/pictures/self_picture.jpg',
'./resources/pictures/coffee_test.jpg']

function slideClick() {
    imageIndex += 1;
    if (imageIndex === images.length){
        imageIndex = 0;
    };
    slide.src = images[imageIndex];
};

slide.onclick = slideClick;
