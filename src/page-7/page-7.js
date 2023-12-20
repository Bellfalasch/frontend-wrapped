window.onload = function() {
  const digits = ['1', '1', '1'];
  const classes = ['left', 'middle', 'right'];

  digits.forEach((digit, index) => {
    const element = document.createElement('div');
    element.className = 'digit ' + classes[index];
    element.textContent = digit;
    element.style.left = `calc(50% + ${(index - 1)*8}rem)`;
    document.body.appendChild(element);
  });
};