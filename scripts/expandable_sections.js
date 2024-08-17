document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
      // Toggle active class for styling
      button.classList.toggle('active');
      
      // Get the associated content div
      const content = button.nextElementSibling;
      
      // Toggle the display of the content
      if (content.style.display === "block") {
          content.style.display = "none";
      } else {
          content.style.display = "block";
      }
  });
});