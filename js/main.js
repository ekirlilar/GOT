(()=> {
	let sigilButtons = document.querySelectorAll(".sigilContainer"),
		lightBox = document.querySelector(".lightbox"),
		houseVideo = lightBox.querySelector("video"),
		closeButton = lightBox.querySelector(".close-button");

	function showLightBox() {

		lightBox.classList.add("show-lightbox");

		houseVideo.play();
	}

	function hideLightBox(){
		lightBox.classList.remove("show-lightbox");
		houseVideo.pause();
		houseVideo.currentTime = 0;
	}

	sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

	closeButton.addEventListener("click", hideLightBox);
})();