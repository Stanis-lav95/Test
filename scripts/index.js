var img = document.querySelector('.aboutMe-img');

if (img) {
    img.addEventListener('mousemove', function (e) {
        var rect = img.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        // Увеличенный наклон к курсору
        var rotateX = (y / rect.height - 0.5) * 25; 
        var rotateY = (x / rect.width - 0.5) * -25;

        img.style.transform =
            'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.1)';
        img.classList.add('hover-effect');
    });

    img.addEventListener('mouseleave', function () {
        img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        img.classList.remove('hover-effect');
    });
}
