let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


fetch("http://adammolnar.dk/examproject/wp-json/wp/v2/featured_post/" + id + "?_embed")
    .then(e => e.json())
    .then(showSingleFeaturedPost)

function showSingleFeaturedPost(aFeaturedPost) {
    console.log(aFeaturedPost);
    const singleFeaturedPost = document.querySelector("#featured-singlePost");
    document.querySelector("h1").textContent = aFeaturedPost.title.rendered;
    document.querySelector(".featured-description").innerHTML = aFeaturedPost.content.rendered;
}


