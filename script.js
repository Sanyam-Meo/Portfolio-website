document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);
    themeToggleButton.textContent = currentTheme === 'dark-mode' ? '🌞' : '🌙';

    themeToggleButton.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        const newTheme = isDark ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newTheme);
        themeToggleButton.textContent = isDark ? '🌞' : '🌙';
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTopBtn.style.display = scrolled > 100 ? 'block' : 'none';
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact Form Handling
    const form = document.getElementById('contact-form');
    const messageBox = document.createElement('div');
    messageBox.id = 'form-message';
    messageBox.style.marginTop = '10px';
    form.appendChild(messageBox);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            showMessage('Please fill out all fields.', 'error');
        } else {
            showMessage('Message sent successfully!', 'success');
            form.reset();
        }
    });

    function showMessage(msg, type) {
        messageBox.textContent = msg;
        messageBox.style.color = type === 'error' ? 'red' : 'green';
    }
});
