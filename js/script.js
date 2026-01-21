document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission
    
    const form = event.target;
    const data = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('form-success').style.display = 'block';
            form.reset(); // clear the form
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your form.");
    });
});

const phrases = [
    "Sejal Shaji",
  "Python Web Developer",
  "Django Enthusiast",
  "Full-Stack Developer",
  "REST API Creator",
  "Open Source Contributor"
];

let i = 0, currentPhrase = "", isDeleting = false;

function type() {
    let fullText = phrases[i];
    if(isDeleting) {
        currentPhrase = fullText.substring(0, currentPhrase.length - 1);
    } else {
        currentPhrase = fullText.substring(0, currentPhrase.length + 1);
    }

    document.getElementById("typed-text").textContent = currentPhrase;

    let delay = isDeleting ? 50 : 150;

    if(!isDeleting && currentPhrase === fullText) {
        delay = 1000;
        isDeleting = true;
    } else if(isDeleting && currentPhrase === "") {
        isDeleting = false;
        i++;
        if(i >= phrases.length) i = 0;
        delay = 500;
    }

    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", type);
