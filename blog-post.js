let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


fetch("http://adammolnar.dk/examproject/wp-json/wp/v2/blogpost/" + id + "?_embed")
    .then(e => e.json())
    .then(showSinglePost)

function showSinglePost(aPost) {
    console.log(aPost);

    let singlePost = document.querySelector("#singlePost");
 	 	document.querySelector(".hero-img").src = aPost.acf.image;
		document.querySelector(".single-post-title").textContent = aPost.title.rendered;
		document.querySelector(".single-post-intro-text").textContent = aPost.acf.introtext;
    document.querySelector(".single-post-content").innerHTML = aPost.content.rendered;
		document.querySelector(".single-post-author").innerHTML = aPost.acf.author;
}


