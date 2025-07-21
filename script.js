const themeToggleButton = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
    document.body.classList.add(currentTheme);
}


themeToggleButton.addEventListener('click', () => {
    
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggleButton.textContent = '🌙'; 
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleButton.textContent = '🌞'; 
    }
});


const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    if (!name || !email || !message) {
        event.preventDefault(); 
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Message sent successfully!');
    }
});

window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
