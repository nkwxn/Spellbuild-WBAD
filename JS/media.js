// untuk menjalankan image carousel pada bagian 
var slides = document.querySelector('.imageContainer').children;
var totalSlides = slides.length;
var index = -1;

function next(direction) {
    if (direction=="next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("bnnrActive");
    }
    slides[index].classList.add("bnnrActive");
}
function caurosel() {
    next("next");
    setTimeout(caurosel, 7000);
}
let imgIndex;
//untuk bagian fanart
function fanartPressed(imgIndex) {
    const arrAuthors = new Array(
        "moksquared",
        "Bogyfobiya",
        "emiyaneechan",
        "goodmode",
        "JonCerber-SzW",
        "Ransack001",
        "Raphire",
        "ten-gou",
        "TTJoey"
    );
    const arrImgSource = new Array(
        "moksquared.jpg",
        "Bogyfobiya.jpg",
        "emiyaneechan.jpg",
        "goodmode.png",
        "JonCerber-SzW.jpg",
        "Ransack001.png",
        "Raphire.jpg",
        "ten-gou.jpg",
        "TTJoey.jpg"
    );
    let windowCaption = "Fanart by " + arrAuthors[imgIndex];
    let imgSrc = "images/fanArt/" + arrImgSource[imgIndex];
    document.getElementById("gallery").style.display = "none";
    document.getElementById("preview").style.display = "flex";
    document.getElementById("fnrtAuth").innerHTML = windowCaption;
    document.getElementById("imgPreview").setAttribute("src", imgSrc);
}

function closeButtonClicked() {
    document.getElementById("gallery").style.display = "flex";
    document.getElementById("preview").style.display = "none";
}