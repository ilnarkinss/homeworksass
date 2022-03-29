const rootElem = document.querySelector('#root');
const cardsElem = document.querySelector('#cards');
const textElem = document.querySelector('#selecttext');
const translateElem = document.querySelector('#selecttranslate');
const colorElem = document.querySelector('#selectcolor');
const searchElem = document.querySelector('#srchinpt')
let cardsLst = [];

function render(list) {
	cardsElem.innerText = ''
	for (let elem of list){
		const cardElem = document.createElement('div');
		const gentextElem = document.createElement('p');
		const crossElem = document.createElement('div');

		cardElem.classList.add('card');
		gentextElem.classList.add('text');
		crossElem.classList.add('cross');

		crossElem.innerText = '❌';
		gentextElem.innerText = elem.text;
		cardElem.style.backgroundColor = elem.color;

		cardElem.append(gentextElem, crossElem);
		cardsElem.append(cardElem);

		crossElem.addEventListener('click', event=>{
			cardsLst = cardsLst.filter(fElem => fElem.text !== elem.text); 
 			render(cardsLst)
		});
		
		cardElem.addEventListener('dblclick', ()=>{
			gentextElem.innerText = elem.translate;
		});

	}

}

searchElem.addEventListener('input', event=>{
	event.preventDefault();
	let srchlst = cardsLst.filter(srchElem => srchElem.text.startsWith(event.target.value))
	render(srchlst)
})

addEventListener('submit', event=>{
	event.preventDefault();
	if (selecttext.value !== '' & selecttranslate.value !== ''){
		const {selecttext, selecttranslate, selectcolor} = event.target
		cardsLst.push({
			text: selecttext.value, 
			translate: selecttranslate.value,
			color: selectcolor.value,
		});
		render(cardsLst);
	}else{
		return
	}
})