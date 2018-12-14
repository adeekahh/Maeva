function getFeaturedBlogPosts() {
  fetch("http://adammolnar.dk/examproject/wp-json/acf/v3/featured_post?_embed")
    .then(res => res.json())
    .then(showFeaturedPosts)

	fetch("http://adammolnar.dk/examproject/wp-json/wp/v2/featured_post")
	.then(res=> res.json())
	.then(showFeaturedPosts)

}

function showFeaturedPosts(featuredPostList) {
  featuredPostList.forEach(showSingleFeaturedPost)
	console.log(featuredPostList[0]);

}

getFeaturedBlogPosts();

function showSingleFeaturedPost(featuredPost){

	console.log(featuredPost);

	document.querySelector('.featured-post').style.backgroundImage = "url('" +featuredPost.acf.thumbnail_image.url+ "')";

	document.querySelector('.featured-post-introtext').innerHTML = featuredPost.acf.introtext;

	document.querySelector('.featured-post-readmore-link').href = "featured-blog-post.html?id=" + featuredPost.id;

	document.querySelector('.featured-post-title').innerHTML = featuredPost.title.rendered;



	console.log(featuredPost.acf.thumbnail_image.url);

}
