//MOBILE NAVIGATION OPEN / CLOSE
function openNav(){

	document.getElementById("myNav").style.width= "100%";

	document.querySelector(".openbtn").addEventListener("click", closeNav);

	document.querySelector(".navigation-link").addEventListener("click", closeNav);



}



function closeNav(){

	document.getElementById("myNav").style.width= "0%";

	document.querySelector(".openbtn").removeEventListener("click", closeNav);



	document.querySelector(".navigation-link").addEventListener("click", closeNav);



};
