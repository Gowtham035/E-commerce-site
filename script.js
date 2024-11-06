document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting and refreshing the page

    // Show success message
    var successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');

    // Optionally, hide the message after 5 seconds
    setTimeout(function() {
        successMessage.classList.remove('show');
    }, 5000);
});

