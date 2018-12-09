// BLOG DATA

const templatePosts = document.querySelector("#template-blogposts").content;

function getBlogPosts() {
  fetch("http://adammolnar.dk/examproject/wp-json/acf/v3/blogpost")
    .then(res => res.json())
    .then(showPosts)
}

function showPosts(postList) {
  postList.forEach(showSinglePost)
}

function showSinglePost(post) {
  console.log(post)
  const copy2 = templatePosts.cloneNode(true);
  copy2.querySelector("img").src = post.acf.image;
  copy2.querySelector("h1").textContent = post.acf.title;
  copy2.querySelector(".post-introtext").textContent = post.acf.introtext;
	/*
  copy2.querySelector(".bodytext").textContent = post.acf.bodytext;
  copy2.querySelector(".date").textContent = post.acf.date;
  copy2.querySelector(".author").textContent = post.acf.author;*/
  document.querySelector(".blog-container").appendChild(copy2);
	setTimeout(document.querySelector('.featured-readmore-button').addEventListener('click', showFeaturedText), 100);

}

getBlogPosts();


function showFeaturedText(){
	document.querySelector('.featured-post-bodytext').style.display='block';


	setTimeout(document.querySelector('.featured-readmore-button').addEventListener('click', hideFeaturedText), 100);
	console.log('showingthetext');

};


function hideFeaturedText(){
	document.querySelector('.featured-post-bodytext').style.display='none';
	console.log('hidingtext');

	setTimeout(document.querySelector('.featured-readmore-button').addEventListener('click', showFeaturedText), 100);

};







