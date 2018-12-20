let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


fetch("https://adammolnar.dk/examproject/wp-json/wp/v2/featured_post/" + id + "?_embed")
    .then(e => e.json())
    .then(showSingleFeaturedPost)

function showSingleFeaturedPost(aFeaturedPost) {
    console.log(aFeaturedPost);

 	 	document.querySelector(".featured-hero-img").src = aFeaturedPost.acf.thumbnail_image;
    document.querySelector(".featured-hero-img").alt = aFeaturedPost.acf.alt;
		document.querySelector(".featured-single-post-header").textContent = aFeaturedPost.title.rendered;
		document.querySelector(".featured-single-post-intro-text").textContent = aFeaturedPost.acf.introtext;
    document.querySelector(".featured-single-post-content").innerHTML = aFeaturedPost.content.rendered;
		document.querySelector(".featured-single-post-author").innerHTML = aFeaturedPost.acf.author;
}
