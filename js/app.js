// Initialize AOS (Animate On Scroll) Library
AOS.init({
    duration: 1200, // Duration of animation (in milliseconds)
  });
  
  // Apply hover animations using AOS attributes in the HTML file
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.project1, .project2, .project3');
    elements.forEach(function(element) {
      element.setAttribute('data-aos', 'fade-up');
    });
  });
  