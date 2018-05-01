
export const sentenceMove = () => {
	var animEL = document.getElementsByClassName('animation');
	var p = animEL[0].getElementsByTagName('p');
	var s = 0;

	window.onload = [].forEach.call(p, (value) => {
					value.classList.add('sample');
			}),
			setInterval(function() {
					if (Math.abs(s) >= p[0].clientWidth) {
							s = 0;
					} else {
							s -= 2;
							p[0].style.transform = 'translateX(' + s + 'px)';
					}
			}, 10);
}
