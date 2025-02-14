// Toggle the mobile menu visibility
document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  });
 
//for the preloader
// JavaScript to hide the preloader after the page loads
window.addEventListener('load', function() {
  // Get the preloader element
  const preloader = document.getElementById('preloader');
  const heroContent = document.querySelector('.hero'); 

  // Fade out the preloader
  preloader.style.opacity = 0;

  // After the fade-out transition, hide the preloader and show the content
  setTimeout(() => {
    preloader.style.display = 'none'; // Remove preloader from the DOM
    heroContent.style.display = 'flex'; // Show the main content
  }, 1000); // Match this time with the fade-out duration
});

//for about
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Trigger animations when the #about section is in the viewport
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");
  const aboutImage = document.querySelector(".about-image");

  function handleScroll() {
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
          aboutImage.style.transform = "translateX(0)";
          aboutImage.style.opacity = "1";
      } else {
          aboutImage.style.transform = "translateX(-100%)";
          aboutImage.style.opacity = "0";
      }
  }

  window.addEventListener("scroll", handleScroll);
});



//for project section
function openModal(projectId) {
  const projects = {
      1: { 
          title: "Project One", 
          images: ["images/p1_1.png", "images/p1_2.png", "images/p1.png"] ,
          description: [
            "Project Name: Decor Delight ",
            "Description: Crafting spaces that transcend functionality, embodying a harmonious blend of style and comfort",
            "Frontend: HTML, CSS and JavaScript",
            "Backend: PHP "
        ]
        },
      2: { 
          title: "Project Two", 
          images: ["images/logss.PNG", "images/categss.PNG","images/splashss.PNG"] ,
          description: [
            "Project Name: GroCertia ",
            "Description: An android application built for online grocery shopping",
            "Frontend: Java",
            "Backend: Firebase "
        ]
        }
  };
  const project = projects[projectId];
  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-images").innerHTML = project.images
    .map(img => `<img src="${img}" alt="Project Image">`).join('');
    document.getElementById("modal-description").innerHTML = project.description
    .map(line => `<p>${line}</p>`).join('');
  document.getElementById("modal").classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

//skill section
document.addEventListener("DOMContentLoaded", function () {
  const skillCards = document.querySelectorAll('.skill-card');

  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add 'animate' class when in view
      } else {
        entry.target.classList.remove('animate'); // Remove 'animate' class when out of view
      }
    });
  }, options);

  // Observe each skill card
  skillCards.forEach(card => {
    observer.observe(card);
  });
});


//for resume contact prt
  function viewResume() {
    // Replace this URL with the path to your actual resume file
    window.open('/POOJA_PATEL.pdf', '_blank');
  }

//skillcard fill
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    const skillLevel = card.getAttribute('data-skill'); // Get the skill level (0-100)
    const fill = card.querySelector('.fill');
    
    // Animate the progress bar by setting the width
    fill.style.width = `${skillLevel}%`;
  });
});

//resumecontainer slide
// If you want to trigger animations on both divs when a button is clicked
function viewResume() {
  const resumeWrapper = document.querySelector('.resume-container');
  resumeWrapper.classList.add('visible'); // Add the "visible" class to trigger the animation
}

// Automatically trigger the animation when the page loads (optional)
window.onload = function() {
  viewResume();
};

// Toggle the mobile menu visibility
document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  });
 