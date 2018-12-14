let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


fetch("http://adammolnar.dk/examproject/wp-json/wp/v2/blogpost/" + id + "?_embed")
    .then(e => e.json())
    .then(showSinglePost)

function showSinglePost(aPost) {
    console.log(aPost);
    let singlePost = document.querySelector("#singlePost");
    document.querySelector("h1").textContent = aPost.title.rendered;
    document.querySelector(".description").innerHTML = aPost.content.rendered;
}


