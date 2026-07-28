var img = document.querySelector('.aboutMe-img')

function handleMove(x, y, rect) {
	var rotateX = (y / rect.height - 0.5) * 25
	var rotateY = (x / rect.width - 0.5) * -25

	img.style.transform =
		'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.1)'
	img.classList.add('hover-effect')
}

if (img) {
	// ======== МЫШЬ (ПК) ========
	img.addEventListener('mousemove', function (e) {
		var rect = img.getBoundingClientRect()
		var x = e.clientX - rect.left
		var y = e.clientY - rect.top

		handleMove(x, y, rect)
	})

	// ======== ТАЧ (МОБИЛЬНЫЕ) ========
	img.addEventListener('touchmove', function (e) {
		var rect = img.getBoundingClientRect()
		var touch = e.touches[0] // первый палец

		var x = touch.clientX - rect.left
		var y = touch.clientY - rect.top

		handleMove(x, y, rect)
	})

	// ======== СБРОС ЭФФЕКТА ========
	img.addEventListener('mouseleave', resetTilt)
	img.addEventListener('touchend', resetTilt)

	function resetTilt() {
		img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
		img.classList.remove('hover-effect')
	}
}
