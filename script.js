function openNav(){

	document.getElementById("myNav").style.width= "100%";

	document.querySelector(".openbtn").addEventListener("click", closeNav);

	document.querySelector(".nav1").addEventListener("click", closeNav);

	document.querySelector(".nav2").addEventListener("click", closeNav);

	document.querySelector(".nav3").addEventListener("click", closeNav);

	setTimeout(function(){ document.body.addEventListener("click", closeNav) }, 100);

	setTimeout(function(){ document.body.addEventListener("touchend", closeNav) }, 100);



}



function closeNav(){

	document.getElementById("myNav").style.width= "0%";

	document.querySelector(".openbtn").removeEventListener("click", closeNav);

	setTimeout(function(){ document.body.removeEventListener("click", closeNav) }, 100);

	setTimeout(function(){ document.body.removeEventListener("touchend", closeNav) }, 100);
	}


	document.querySelector(".nav1").addEventListener("click", closeNav);

	document.querySelector(".nav1").addEventListener("click", closeNav);

	document.querySelector(".nav1").addEventListener("click", closeNav);


document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeNav();
    }
};
