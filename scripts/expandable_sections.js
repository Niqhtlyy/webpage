document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', () => {
      const parent = button.closest('.expandable');
      parent.classList.toggle('active');
  });
});