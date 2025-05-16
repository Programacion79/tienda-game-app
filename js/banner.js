document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".banner");
  const title = banner.querySelector("h2"); // Selecciona el título
  const paragraph = banner.querySelector("p"); // Selecciona el párrafo
  const images = [
    "/images/banner/Banner.jpg",
    "/images/banner/banner2.jpg",
    "/images/banner/banner3.jpg",
    "/images/banner/banner4.jpg",
  ];
  const texts = [
    {
      title: "Mundo Gamer",
      paragraph:
        "Transformando problemas en soluciones, donde la tecnología y la confianza se encuentran.",
    },
    {
      title: "Reparaciones",
      paragraph: "Reparamos y realizamos mantenimiento a tus computadoras",
    },
    {
      title: "Instalaciones",
      paragraph: "Instalamos partes y vendemos piezas de calidad",
    },
    {
      title: "Diseño",
      paragraph: "Ofrecemos soluciones de diseño personalizadas",
    },
  ];
  let currentIndex = 0;

  function changeBackground() {
    // Cambiar la imagen de fondo
    banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('${images[currentIndex]}')`;

    // Cambiar el texto del título y párrafo
    title.textContent = texts[currentIndex].title;
    paragraph.textContent = texts[currentIndex].paragraph;

    currentIndex = (currentIndex + 1) % images.length;
  }

  // Cambia la imagen de fondo y el texto cada 7 segundos
  setInterval(changeBackground, 10000);

  // Cambia la imagen de fondo y el texto al cargar la página
  changeBackground();
});
