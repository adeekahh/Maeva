// BLOG DATA
/*
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
  copy2.querySelector(".author").textContent = post.acf.author;
  document.querySelector(".blog-post-container").appendChild(copy2);
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

*/


let page = 1;
let lookingForData = false;

function fetchBlog() {
    lookingForData = true;
    fetch("http://tomasgazi.com/wordpress/wp-json/wp/v2/blog?_embed&per_page=4&page=" + page)
        .then(e => e.json())
        .then(showBlog)
}

function showBlog(data) {
    console.log(data);
    lookingForData = false;
    data.forEach(showSinglePost)
}

function showSinglePost(aPost) {
    console.log(aPost);
    let template = document.querySelector("#blogtemp").content;
    let clone = template.cloneNode(true);
    clone.querySelector("h1").innerHTML = aPost.title.rendered;
    clone.querySelector("img").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url);
    let blogposts = document.querySelector("#blogposts");
    clone.querySelector('.readmore').href = "subpage.html?id=" + aPost.id;
    blogposts.appendChild(clone);

}

fetchBlog();

setInterval(function () {

    if (bottomVisible() && lookingForData === false) {
        page++;
        fetchBlog();
    }
}, 100)


function bottomVisible() {
    const scrollY = window.scrollY
    const visible = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const bottomOfPage = visible + scrollY >= pageHeight
    return bottomOfPage || pageHeight < visible
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}






