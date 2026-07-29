var img = document.querySelector('.aboutMe-img');

function handleMove(x, y, rect) {
    var rotateX = (y / rect.height - 0.5) * 25;
    var rotateY = (x / rect.width - 0.5) * -25;

    img.style.transform =
        'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.1)';
    img.classList.add('hover-effect');
}

// ======== Scroll lock ========
function disableScroll(e) {
    e.preventDefault();
}

function enableScroll() {
    document.body.style.overflow = '';
}

if (img) {
    // ======== MOUSE (PC) ========
    img.addEventListener('mousemove', function (e) {
        var rect = img.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        handleMove(x, y, rect);
    });

    // ======== TOUCH (MOBILE) ========
    img.addEventListener('touchstart', function () {
        document.body.style.overflow = 'hidden'; // блокируем скролл
    });

    img.addEventListener('touchmove', function (e) {
        var rect = img.getBoundingClientRect();
        var touch = e.touches[0];

        var x = touch.clientX - rect.left;
        var y = touch.clientY - rect.top;

        handleMove(x, y, rect);

        disableScroll(e); // запрещаем скролл во время движения пальца
    });

    img.addEventListener('touchend', function () {
        resetTilt();
        enableScroll(); // возвращаем скролл
    });

    // ======== RESET EFFECT ========
    img.addEventListener('mouseleave', resetTilt);

    function resetTilt() {
        img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        img.classList.remove('hover-effect');
    }
}
