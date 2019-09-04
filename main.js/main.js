


function slide() {
	var back = document.getElementById('sectionTravelling');
	var butTop = document.getElementById('buttonTop');
	var dot_o = document.getElementById('dot_o');
	var dot_t = document.getElementById('dot_t');
	back.style.backgroundImage = "url('image/im3.png')";
	butTop.setAttribute("onclick", 'funk()');
	dot_o.classList.remove('dot');
	dot_t.classList.add('dot');
}

function funk() {
	var back = document.getElementById('sectionTravelling');
	var butTop = document.getElementById('buttonTop');
	var dot_t = document.getElementById('dot_t');
	var dot_f = document.getElementById('dot_f');
	back.style.backgroundImage = "url('image/im4.png')";
	butTop.setAttribute("onclick", 'funkup()');
	dot_t.classList.remove('dot');
	dot_f.classList.add('dot');
}

function funkup () {
	var back = document.getElementById('sectionTravelling');
	var butTop = document.getElementById('buttonTop');
	var dot_f = document.getElementById('dot_f');
	var dot_r = document.getElementById('dot_r');
	back.style.backgroundImage = "url('image/im8.png')";
	butTop.setAttribute("onclick", 'funkupp()');
	dot_f.classList.remove('dot');
	dot_r.classList.add('dot');
}

function funkupp () {
	var back = document.getElementById('sectionTravelling');
	var butTop = document.getElementById('buttonTop');
	var dot_r = document.getElementById('dot_r');
	var dot_s = document.getElementById('dot_s');
	back.style.backgroundImage = "url('image/im6.png')";
	dot_r.classList.remove('dot');
	dot_s.classList.add('dot');
}

function slideDwn () {
	var back = document.getElementById('sectionTravelling');
	var butTop = document.getElementById('buttonTop');
	var dot_o = document.getElementById('dot_o');
	var dot_t = document.getElementById('dot_t');
	var dot_f = document.getElementById('dot_f');
	var dot_r = document.getElementById('dot_r');
	var dot_s = document.getElementById('dot_s');
	back.style.backgroundImage = "url('image/backgraund.png')";
	butTop.setAttribute("onclick", 'slide()');
	dot_o.classList.add('dot');
	dot_t.classList.remove('dot');
	dot_f.classList.remove('dot');
	dot_r.classList.remove('dot');
	dot_s.classList.remove('dot');
}
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("right");
    var dots = document.getElementsByClassName("slideNumber");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = "100%";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.left = "0%";
    dots[slideIndex - 1].className += " active";
}


