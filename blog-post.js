/*const urlAddition = new URLSearchParams(window.location.search);
const id = urlAddition.get("id");



fetch("http://adammolnar.dk/examproject/wp-json/wp/v2/blogpost?_embed" + id + "?_embed")
    .then(e => e.json())
    .then(showSinglePost)

function showSinglePost(post) {
    console.log(post);
    const blogPost = document.querySelector(".post-container");
    document.querySelector(".post-title").textContent = post.title.rendered;
    document.querySelector(".desc").innerHTML = post.acf.bodytext;}
*/

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


fetch("http://adammolnar.dk/examproject/wp-json/wp/v2/blogpost/" + id + "?_embed")
    .then(e => e.json())
    .then(showSinglePost)

function showSinglePost(aPost) {
    console.log(aPost);
    let singlePost = document.querySelector("#singlePost");
    document.querySelector("h1").textContent = aPost.title.rendered;
    document.querySelector(".desc").innerHTML = aPost.content.rendered;
    document.querySelector(".subimage").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url);
}


