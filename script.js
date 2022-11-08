const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector(".slider");
const btnTop = document.querySelector(".btn-top");
const btnBottom = document.querySelector(".btn-bottom");
const eleLibrary = document.querySelector(".library")



for (let i = 0; i < images.length; i++) {
    const eleImg = document.createElement("img");
    eleImg.src = `img/${images[i].image}`;
    eleImg.alt = `img/${images[i].title}`;
    eleImg.classList.add("slider-img")

    if (i === 0) {
        eleImg.classList.add("visible");
    }

    eleSlider.append(eleImg);
    const eleInfo = document.createElement("div");
    const eleTitle = document.createElement("h1");
    const eleDescription = document.createElement("p");
    eleInfo.classList.add("info");
    eleTitle.classList.add("title");
    eleDescription.classList.add("description");
    eleTitle.innerHTML = images[i].title;
    eleDescription.innerHTML = images[i].text;
    eleInfo.append(eleTitle, eleDescription);
    eleSlider.append(eleInfo)
    if (i != 0) {
        eleInfo.classList.add("hidden")
    }
}

for (let i = 0; i < images.length; i++) {
    const eleDivImgContainer = document.createElement("div")
    eleDivImgContainer.classList.add("image", "overlay")
    const eleThumb = document.createElement("img");
    eleThumb.src = `img/${images[i].image}`
    eleThumb.classList.add("library-img");
    if (i === 0) {
        eleDivImgContainer.classList.remove("overlay")
    }
    eleDivImgContainer.append(eleThumb)
    eleLibrary.append(eleDivImgContainer)
}

const listImg = document.querySelectorAll(".slider-img");
const listImgThumb = document.querySelectorAll(".image");
let visibleIndex = 0;
const eleInfo = document.querySelectorAll(".info") 

btnBottom.addEventListener("click", function(){
    listImg[visibleIndex].classList.remove("visible");
    listImgThumb[visibleIndex].classList.add("overlay");
    eleInfo[visibleIndex].classList.add("hidden");
    if (visibleIndex >= listImg.length - 1) {
        visibleIndex = 0
    } else {
        visibleIndex++;
    }
    listImg[visibleIndex].classList.add("visible");
    listImgThumb[visibleIndex].classList.remove("overlay")
    eleInfo[visibleIndex].classList.remove("hidden");
})

btnTop.addEventListener("click", function(){

    listImg[visibleIndex].classList.remove("visible");
    listImgThumb[visibleIndex].classList.add("overlay");
    eleInfo[visibleIndex].classList.add("hidden");
    if (visibleIndex <= 0) {
        visibleIndex = listImg.length - 1
    } else {
        visibleIndex--;
    }
    listImg[visibleIndex].classList.add("visible");
    listImgThumb[visibleIndex].classList.remove("overlay")
    eleInfo[visibleIndex].classList.remove("hidden");
})
