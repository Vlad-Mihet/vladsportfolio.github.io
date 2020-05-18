document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var button = document.getElementById('goDown');
button.addEventListener('click', animate);
images = document.getElementsByClassName('imgToAnimate');

function animate() {
    for (i = 0; i < images.length; i++) {
        images[i].classList.add('scale-in-center');
    }
}