
var slides = document.querySelectorAll('section.content .part');
var current = 0;
nextSlide();
var timer = setInterval(nextSlide, 4000);

function nextSlide() {
		slides[current].className="part";
		current = (current+1)%slides.length;
		slides[current].className = "part active";
	}