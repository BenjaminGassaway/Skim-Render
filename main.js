window.onload = function () {
	const colour_btn_els = document.querySelectorAll('.colours .colour');
	const thickness_btn_els = document.querySelectorAll('.thickness .size');
	const imagery_el = document.querySelector('.imagery');
	const image_el = document.querySelector('.imagery .image');

	for (let i = 0; i < thickness_btn_els.length; i++) {
		let btn = thickness_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.thickness .size.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}

	for (let i = 0; i < colour_btn_els.length; i++) {
		let btn = colour_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.colours .colour.selected').classList.remove('selected');
			this.classList.add('selected');
			image_el.src = "images/skim-" + this.dataset.name + '.png';
			imagery_el.style.backgroundColor = this.dataset.colour;
		});
	}
}