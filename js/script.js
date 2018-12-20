//JSON

//WORKS DATA
const workTemplate = document.querySelector("#template-works").content;


function getWorks() {
  fetch("https://adammolnar.dk/examproject/wp-json/acf/v3/works")
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

