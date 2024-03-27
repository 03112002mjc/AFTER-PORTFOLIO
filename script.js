
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to handle tab switching in about
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function navigateToLogin() {
    // Apply fade-out effect to the body content
    document.body.style.opacity = '0';
    
    // Wait for the transition to complete
    setTimeout(function() {
        // Navigate to the login.html page
        window.location.href = 'login/login.html';
    }, 300); // 500 milliseconds = 0.5 seconds (adjust as needed)
}

function scrollToSection() {
    const section = window.location.hash.substring(1);
    if (section) {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', scrollToSection);


// Function to open side menu in small screen
function openmenu() {
    var sidemen = document.getElementById("sidemenu");
    sidemen.style.right = "0";
}




// Function to close side menu in small screen
function closemenu() {
    var sidemen = document.getElementById("sidemenu");
    sidemen.style.right = "-200px";
}



// Function to submit form data to Google Sheets
document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxg2bQs_2tpb4H6MhjkUD8xmJ9-pBUPk3Oqoic7bakzTo_mD_55NbLCT4oi3cKvYCGy/exec';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    alert("Message sent!");
                    form.reset();
                } else {
                    
                    console.error('Error!', response.status);
                }
            })
            .catch(error => console.error('Error!', error.message));
    });
});

