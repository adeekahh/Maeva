function openNav(){

	document.getElementById("myNav").style.width= "100%";

	document.querySelector(".openbtn").addEventListener("click", closeNav);

	document.querySelector(".navigation-link").addEventListener("click", closeNav);

	setTimeout(function(){ document.body.addEventListener("click", closeNav) }, 100);

	setTimeout(function(){ document.body.addEventListener("touchend", closeNav) }, 100);

	document.querySelector('body').style.overflow = "hidden";

}



function closeNav(){

	document.getElementById("myNav").style.width= "0%";

	document.querySelector(".openbtn").removeEventListener("click", closeNav);

	setTimeout(function(){ document.body.removeEventListener("click", closeNav) }, 100);

	setTimeout(function(){ document.body.removeEventListener("touchend", closeNav) }, 100);

	document.querySelector(".navigation-link").addEventListener("click", closeNav);

	document.querySelector('body').style.overflow = "scroll";



};

