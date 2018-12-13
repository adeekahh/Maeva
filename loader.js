window.setTimeout(fadeOutLoaderVideo, 1200);
window.setTimeout(fadeOutLoader, 1800);
window.setTimeout(hideLoader, 2400);
window.setTimeout(fadeInPage, 2500);

function fadeOutLoaderVideo(){
	document.querySelector('.loader-video').style.opacity = '0';
	}

function fadeOutLoader (){
	document.querySelector('.loader-overlay').style.opacity= '0';
	}

function hideLoader(){
	document.querySelector('.loader-overlay').style.display= 'none';
	console.log('hideloader');
}

function fadeInPage(){
	document.querySelector('.works-container').style.opacity='1';
	console.log('fadeinpage');
}
