// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
  
    // Function to show the selected section and hide others
    function showSection(sectionId) {
      sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
      });
    }
  
    // Initial display
    showSection('home');
  
    // Add click event listeners to nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-section');
        showSection(sectionId);
      });
    });
  });
  