// FETCH WORKS DATA
const template = document.querySelector("#tempate-works").content;



function getWorks() {
  fetch("http://adammolnar.dk/examproject/wp-json/acf/v3/works")
    .then(res => res.json())
    .then(showWorks);
}

getWorks();




function showWorks(workList) {
  workList.forEach(showSingleWork);

}



function showSingleWork(work) {
  const copy = workTemplate.cloneNode(true);
  copy.querySelector(".image").src = work.acf.pictures;
  copy.querySelector(".makeup").textContent = work.acf.makeup;
  copy.querySelector(".stylist").textContent = work.acf.stylist;
  copy.querySelector(".hair").textContent=work.acf.hair;
  document.querySelector(".works-container").appendChild(copy);
}

