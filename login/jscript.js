function navigateToSection(section) {
    // Navigate to the main.html page with section parameter
    window.location.href = `../index.html#${section}`;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('pass');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('bx-lock-alt');
        eyeIcon.classList.add('bx-show-alt');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('bx-show-alt');
        eyeIcon.classList.add('bx-lock-alt');
    }
}

// Event listener to toggle password visibility when the password input field is focused
document.getElementById('pass').addEventListener('input', function() {
    const eyeIcon = document.getElementById('eye-icon');
    if (this.value.length > 0) {
        eyeIcon.style.display = 'block';
    } else {
        eyeIcon.style.display = 'none';
    }
});

// Event listener to toggle password visibility when the eye icon is clicked
document.getElementById('eye-icon').addEventListener('click', function() {
    togglePasswordVisibility();
});


