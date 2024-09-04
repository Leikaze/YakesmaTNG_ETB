// Target countdown
const targetDate = new Date('2024-10-28T10:59:59');
// Count 1  Second
const countdownInterval = setInterval(function ('1 seconds'); {
// New Date
    const now = new Date('2024-08-29T10:05:01');
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('time').innerHTML =  `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('time').indexHTML = 'EXPIRED';
    }
}, 1000);
