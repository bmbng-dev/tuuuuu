document.addEventListener('DOMContentLoaded', function () {
    const learnMoreBtn = document.getElementById('learn-more');
    learnMoreBtn.addEventListener('click', function () {
        alert('This will take you to a more advanced section of the site.');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        // Example of AJAX request
        fetch('/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => alert('Message sent successfully!'))
        .catch(error => console.error('Error:', error));
    });
});