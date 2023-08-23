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
  const competencesSection = document.getElementById('FormationsSection');
  
  FormationsLink.addEventListener('click', function(event) {
      event.preventDefault(); // Empêcher le comportement par défaut du lien
      
      // Utiliser smooth scrolling pour faire défiler jusqu'à la section compétences
      competencesSection.scrollIntoView({ behavior: 'smooth' });
  });
});



