function updateTime() {
    const timeDisplay = document.querySelector('.main-body #time');

    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}`;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    updateTime();
});