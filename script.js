document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendEmail() {
    var email = 'vlad.mihet@yahoo.com';
    var subject = document.getElementById('senderName').value;
    var body = document.getElementById('mailBody').value;
    window.location = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}