const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const CompetencesLink = document.getElementById('CompétencesLink');
  const competencesSection = document.getElementById('competencesSection');
  
  CompetencesLink.addEventListener('click', function(event) {
      event.preventDefault(); // Empêcher le comportement par défaut du lien
      
      // Utiliser smooth scrolling pour faire défiler jusqu'à la section compétences
      competencesSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const FormationsLink = document.getElementById('FormationsLink');
  const FormationsSection = document.getElementById('FormationsSection');
  
  FormationsLink.addEventListener('click', function(event) {
      event.preventDefault(); // Empêcher le comportement par défaut du lien
      
      // Utiliser smooth scrolling pour faire défiler jusqu'à la section Formations
      FormationsSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const CoordonnéesLink = document.getElementById('CoordonnéesLink');
  const CoordonnéesSection = document.getElementById('CoordonnéesSection');
  
  CoordonnéesLink.addEventListener('click', function(event) {
      event.preventDefault(); // Empêcher le comportement par défaut du lien
      
      // Utiliser smooth scrolling pour faire défiler jusqu'à la section Coordonnées
      CoordonnéesSection.scrollIntoView({ behavior: 'smooth' });
  });
});



// Fonction pour vérifier si l'élément est visible dans la fenêtre de visualisation
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter la classe "bounce-top" si l'élément est visible
function animateOnScroll() {
  var element = document.querySelector('.animation-trigger');
  if (isElementInViewport(element)) {
    element.classList.add('bounce-top');
  }
}

// Écouteur d'événement pour déclencher l'animation lorsque l'utilisateur fait défiler
window.addEventListener('scroll', animateOnScroll);




