
document.addEventListener("DOMContentLoaded", function () {
  var animationElement = document.querySelector(".scroll-animation");

  var waypoint = new Waypoint({
    element: animationElement,
    handler: function () {
      animationElement.classList.add("bounce-top");
      this.destroy(); // Arrête le suivi une fois l'animation ajoutée
    },
    offset: "50%" // L'animation se déclenchera lorsque l'élément est à 50% de la fenêtre
  });
});

