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


//JSON

// FETCH WORKS DATA
const workTemplate = document.querySelector("#template-works").content;


function getWorks() {
  fetch("http://adammolnar.dk/examproject/wp-json/acf/v3/works")
    .then(res => res.json())
    .then(showWorks);
}

getWorks();




function showWorks(workList) {
  workList.forEach(showSingleWork);
	console.log(workList);
}



function showSingleWork(work) {
  const copy = workTemplate.cloneNode(true);
  copy.querySelector(".work-image").src = work.acf.pictures;

	//makeup
	if (work.acf.makeup == false) {
		copy.querySelector(".makeup-title").style.display = "none";}
	copy.querySelector(".makeup").textContent = work.acf.makeup;

	//photographer
	if (work.acf.photographer == false) {
		copy.querySelector(".photographer-title").style.display = "none";}
	copy.querySelector(".photographer").textContent = work.acf.photographer;

	//assistant stylist
	if (work.acf.assistant_stylist == false) {
		copy.querySelector(".assistant-title").style.display = "none";}
	copy.querySelector(".assistant").textContent = work.acf.assistant_stylist;

	//stylist
	if (work.acf.stylist == false) {
		copy.querySelector(".stylist-title").style.display = "none";}
	copy.querySelector(".stylist").textContent = work.acf.stylist;

	//hair
	if (work.acf.hair == false) {
		copy.querySelector(".hair-title").style.display = "none";}
	copy.querySelector(".hair").textContent=work.acf.hair;

	document.querySelector(".works-container").appendChild(copy);


}


