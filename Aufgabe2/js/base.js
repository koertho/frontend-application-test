
var node = document.createElement('div');
node.className = 'slide-background';
node.id = 'part-background';
document.querySelector('section.content').appendChild(node);
var slides = document.querySelectorAll('section.content .part');
var current = 0;
nextSlide();
var timer = setInterval(nextSlide, 4000);

function nextSlide() {
		slides[current].className="part";
		current = (current+1)%slides.length;
		slides[current].className = "part active";
		var image;
		switch (current) {
			case 0: image = 'http://www.flyacts.com/media/pics/1col/einblicke/vikingerschach-beim-teamevent.jpg'; break;
			case 1: image = 'http://www.flyacts.com/media/pics/1col/einblicke/moni_entwirft_strategien.jpg'; break;
			case 2: image = 'http://www.flyacts.com/media/pics/3col/gesamtkonzept_app_vermarktung.jpg'; break;
			case 3: image = 'http://www.flyacts.com/media/pics/1col/einblicke/marcus_und_derk_entwickeln.jpg'; break;
		}
		document.querySelector('#part-background').style.backgroundImage="url(" + image + ")";
	}