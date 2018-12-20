//JSON

//WORKS DATA
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
  copy.querySelector(".work-image").alt = work.acf.alt;


	//photographer
	if (work.acf.photographer == false) {
		copy.querySelector(".photographer-title").style.display = "none";}
	copy.querySelector(".photographer").textContent = work.acf.photographer;

	document.querySelector(".works-container").appendChild(copy);


}
