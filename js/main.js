var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("btn-control");

btn.addEventListener( "click" , () =>{
	if (video.paused) {
		video.play();
		btn.innerText="Pause";
	} else {
		video.pause();
		btn.innerText="Play";
	}
});

$(".fullscrin-control__text").on('click', function(){
	let i = $(".icon-play");
	if(i.hasClass("fa-play")){
	  i.removeClass("fa-play");
	  i.addClass("fa-pause");
	}
	else{
	  i.removeClass("fa-pause");
	  i.addClass("fa-play");
	}
});

// Scroll
window.addEventListener('scroll', e => {
	let header = document.getElementById('header').classList;
	let active_class = "header__scrolled";

	if (pageYOffset > 500) header.add(active_class)
	else header.remove(active_class)
})

