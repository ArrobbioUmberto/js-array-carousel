// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// In questo esercizio è importante seguire le milestone per affrontare in maniera via via crescente le difficoltà di ogni problema.



let picture = ['./img/img1.jpeg', './img/img2.jpeg', './img/img3.jpeg', './img/img4.webp', './img/img5.jpg', './img/img6.webp']

const slideElements = document.querySelectorAll('.slide')
console.log(slideElements)
const arrowElementRight = document.querySelector('.arrow-right')
console.log(arrowElementRight)
const arrowElementLeft = document.querySelector('.arrow-left')
console.log(arrowElementLeft)

let indiceSlideAttiva = 0

// milestone 2 Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, 
// che quindi verrà visualizzata al posto della precedente. Attenzione quando arriviamo all’ultima slide e 
// clicchiamo sulla freccia destra, o viceversa se siamo sulla prima e clicchiamo sulla freccia sinistra.

arrowElementRight.addEventListener('click', function () {
    console.log('current slide', indiceSlideAttiva)

	let slideCorrente = slideElements[indiceSlideAttiva]
	// togliendo la classe active
	slideCorrente.classList.remove('active')

	// inremento l'indice
	indiceSlideAttiva += 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	// aggiungiamo la classe active alla seconda slide
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})
arrowElementLeft.addEventListener('click', function(){
    console.log('current slide', indiceSlideAttiva)

	let slideCorrente = slideElements[indiceSlideAttiva]
	// togliendo la classe active
	slideCorrente.classList.remove('active')

	// inremento l'indice
	indiceSlideAttiva -= 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	// aggiungiamo la classe active alla seconda slide
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})

