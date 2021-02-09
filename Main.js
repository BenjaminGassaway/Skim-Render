window.onload = function () {
	const thick_btn_els = document.querySelectorAll('.thickness .size');
	const color_btn_els = document.querySelector('.colors .color');

/*	for (let i = 0; i < thick_btn_els.length; i++) {
		let btn = thick_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.thickness .size.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}
	*/

	for (let i = 0; i < color_btn_els.length; i++) {
		let btn = color_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.colors .color.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}


}
