window.onload = function() {
    const digit = document.createElement('div');
    digit.className = 'digit';
    digit.textContent = '20';
    document.body.appendChild(digit);

    const fireworks = document.createElement('div');
    fireworks.className = 'explode';
    document.body.appendChild(fireworks);
};