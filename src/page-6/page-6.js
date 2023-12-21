window.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    const form = document.querySelector('form');
    if (form) {
      const action = form.getAttribute('action');
      if (action) {
        window.location.href = action;
      }
    }
  } else if (event.key === 'ArrowLeft') {
    window.history.back();
  }
});