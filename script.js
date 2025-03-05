let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb");

// Função para destacar a primeira thumb
function highlightFirstThumb() {
	let thumbItems = document.querySelectorAll(".thumb .thumb-item");

	// Remove a classe de destaque de todos os itens
	thumbItems.forEach((item) => item.classList.remove("highlight"));

	// Adiciona a classe de destaque ao primeiro item
	if (thumbItems[thumbItems.length - 1]) {
		thumbItems[thumbItems.length - 1].classList.add("highlight");
	}
}

// Chama a função para destacar a primeira thumb ao carregar a página
highlightFirstThumb();

btnNext.onclick = () => moveItemsOnClick("next");
btnBack.onclick = () => moveItemsOnClick("back");

function moveItemsOnClick(type) {
	let listItems = document.querySelectorAll(".list .list-item");
	let thumbItems = document.querySelectorAll(".thumb .thumb-item");

	if (type === "next") {
		list.appendChild(listItems[0]);
		thumb.appendChild(thumbItems[0]);
		container.classList.add("next");
	} else {
		list.prepend(listItems[listItems.length - 1]);
		thumb.prepend(thumbItems[thumbItems.length - 1]);
		container.classList.add("back");
	}

	// Destaca a primeira thumb após a animação
	setTimeout(() => {
		container.classList.remove("next");
		container.classList.remove("back");
	}, 500);

	setTimeout(() => {
		highlightFirstThumb();
	}, 300);
}
