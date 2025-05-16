document.addEventListener("DOMContentLoaded", function () {
  const menuOptions = document.querySelectorAll(".menu-options li");
  const productsList = document.getElementById("products-list");

  // Datos de productos simulados
  const productsData = {
    destacados: [
      {
        title: "Portátil HP 240G7",
        brand: "HP",
        model: "240G7",
        discount: "13%",
        price: "$1.800.000",
        discountedPrice: "$1.760.000",
        images: [
          "../images/productos/Portatiles/Hp/240G7/168868000-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-1-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-2-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-3-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-4-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-5-255G7.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "512Gb",
          screen: '15"',
        },
      },
      {
        title: "Portátil HP 255G7",
        brand: "HP",
        model: "255G7",
        discount: "13%",
        price: "$1.800.000",
        discountedPrice: "$1.760.000",
        images: [
          "../images/productos/Portatiles/Hp/255G7/170058000-1- 255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/170058000- 255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/170058000-4- 255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/170058000-2- 255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/170058000-3- 255G7.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "512Gb",
          screen: '15"',
        },
      },
      {
        title: "Portátil HP 240G7",
        brand: "HP",
        model: "240G7",
        discount: "13%",
        price: "$1.800.000",
        discountedPrice: "$1.760.000",
        images: [
          "../images/productos/Portatiles/Hp/240G7/168868000-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-1-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-2-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-3-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-4-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-5-255G7.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "512Gb",
          screen: '15"',
        },
      },
      {
        title: "Portátil HP 240G7",
        brand: "HP",
        model: "240G7",
        discount: "13%",
        price: "$1.800.000",
        discountedPrice: "$1.760.000",
        images: [
          "../images/productos/Portatiles/Hp/240G7/168868000-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-1-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-2-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-3-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-4-255G7.jpg",
          "../images/productos/Portatiles/Hp/240G7/168868000-5-255G7.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "512Gb",
          screen: '15"',
        },
      },
      // Agrega más productos aquí
    ],
    gamer: [
      {
        title: "Portátil PAVILION 15-DK0001LA",
        brand: "HP",
        model: "PAVILION 15-DK0001LA",
        discount: "10%",
        price: "$2.500.000",
        discountedPrice: "$2.250.000",
        images: [
          "../images/productos/Portatiles/Hp/PAVILION 15-DK0001LA/193905279975.webp",
          "../images/productos/Portatiles/Hp/PAVILION 15-DK0001LA/",
        ],
        specs: {
          processor: "CoreI7",
          ram: "16Gb",
          storage: "1Tb SSD",
          screen: '17"',
        },
      },
      {
        title: "Portátil Gamer ASUS",
        brand: "ASUS",
        model: "ROG Strix",
        discount: "10%",
        price: "$2.500.000",
        discountedPrice: "$2.250.000",
        images: [
          "../images/productos/Gamer/Asus/ROGStrix1.jpg",
          "../images/productos/Gamer/Asus/ROGStrix2.jpg",
          "../images/productos/Gamer/Asus/ROGStrix3.jpg",
        ],
        specs: {
          processor: "CoreI7",
          ram: "16Gb",
          storage: "1Tb SSD",
          screen: '17"',
        },
      },
      {
        title: "Portátil Gamer ASUS",
        brand: "ASUS",
        model: "ROG Strix",
        discount: "10%",
        price: "$2.500.000",
        discountedPrice: "$2.250.000",
        images: [
          "../images/productos/Gamer/Asus/ROGStrix1.jpg",
          "../images/productos/Gamer/Asus/ROGStrix2.jpg",
          "../images/productos/Gamer/Asus/ROGStrix3.jpg",
        ],
        specs: {
          processor: "CoreI7",
          ram: "16Gb",
          storage: "1Tb SSD",
          screen: '17"',
        },
      },
      {
        title: "Portátil Gamer ASUS",
        brand: "ASUS",
        model: "ROG Strix",
        discount: "10%",
        price: "$2.500.000",
        discountedPrice: "$2.250.000",
        images: [
          "../images/productos/Gamer/Asus/ROGStrix1.jpg",
          "../images/productos/Gamer/Asus/ROGStrix2.jpg",
          "../images/productos/Gamer/Asus/ROGStrix3.jpg",
        ],
        specs: {
          processor: "CoreI7",
          ram: "16Gb",
          storage: "1Tb SSD",
          screen: '17"',
        },
      },
      // Agrega más productos aquí
    ],
    vendidos: [
      {
        title: "Portátil PAVILION15-CW1004LA",
        brand: "HP",
        model: "PAVILION15-CW1004LA",
        discount: "15%",
        price: "$1.200.000",
        discountedPrice: "$1.020.000",
        images: [
          "../images/productos/Portatiles/Hp/PAVILION15-CW1004LA/170008000_PAVILION 15.jpg",
          "../images/productos/Portatiles/Lenovo/IdeaPad32.jpg",
        ],
        specs: {
          processor: "CoreI3",
          ram: "4Gb",
          storage: "1Tb",
          screen: '14"',
        },
      },
      {
        title: "Portátil Lenovo IdeaPad",
        brand: "Lenovo",
        model: "IdeaPad 3",
        discount: "15%",
        price: "$1.200.000",
        discountedPrice: "$1.020.000",
        images: [
          "../images/productos/Portatiles/Lenovo/IdeaPad31.jpg",
          "../images/productos/Portatiles/Lenovo/IdeaPad32.jpg",
        ],
        specs: {
          processor: "CoreI3",
          ram: "4Gb",
          storage: "1Tb",
          screen: '14"',
        },
      },
      {
        title: "Portátil Lenovo IdeaPad",
        brand: "Lenovo",
        model: "IdeaPad 3",
        discount: "15%",
        price: "$1.200.000",
        discountedPrice: "$1.020.000",
        images: [
          "../images/productos/Portatiles/Lenovo/IdeaPad31.jpg",
          "../images/productos/Portatiles/Lenovo/IdeaPad32.jpg",
        ],
        specs: {
          processor: "CoreI3",
          ram: "4Gb",
          storage: "1Tb",
          screen: '14"',
        },
      },
      {
        title: "Portátil Lenovo IdeaPad",
        brand: "Lenovo",
        model: "IdeaPad 3",
        discount: "15%",
        price: "$1.200.000",
        discountedPrice: "$1.020.000",
        images: [
          "../images/productos/Portatiles/Lenovo/IdeaPad31.jpg",
          "../images/productos/Portatiles/Lenovo/IdeaPad32.jpg",
        ],
        specs: {
          processor: "CoreI3",
          ram: "4Gb",
          storage: "1Tb",
          screen: '14"',
        },
      },

      // Agrega más productos aquí
    ],
    usados: [
      {
        title: "Portátil Dell Latitude",
        brand: "Dell",
        model: "Latitude E7440",
        discount: "5%",
        price: "$800.000",
        discountedPrice: "$760.000",
        images: [
          "../images/productos/Usados/Dell/LatitudeE74401.jpg",
          "../images/productos/Usados/Dell/LatitudeE74402.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "256Gb SSD",
          screen: '14"',
        },
      },
      {
        title: "Portátil Dell Latitude",
        brand: "Dell",
        model: "Latitude E7440",
        discount: "5%",
        price: "$800.000",
        discountedPrice: "$760.000",
        images: [
          "../images/productos/Usados/Dell/LatitudeE74401.jpg",
          "../images/productos/Usados/Dell/LatitudeE74402.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "256Gb SSD",
          screen: '14"',
        },
      },
      {
        title: "Portátil Dell Latitude",
        brand: "Dell",
        model: "Latitude E7440",
        discount: "5%",
        price: "$800.000",
        discountedPrice: "$760.000",
        images: [
          "../images/productos/Usados/Dell/LatitudeE74401.jpg",
          "../images/productos/Usados/Dell/LatitudeE74402.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "256Gb SSD",
          screen: '14"',
        },
      },
      {
        title: "Portátil Dell Latitude",
        brand: "Dell",
        model: "Latitude E7440",
        discount: "5%",
        price: "$800.000",
        discountedPrice: "$760.000",
        images: [
          "../images/productos/Usados/Dell/LatitudeE74401.jpg",
          "../images/productos/Usados/Dell/LatitudeE74402.jpg",
        ],
        specs: {
          processor: "CoreI5",
          ram: "8Gb",
          storage: "256Gb SSD",
          screen: '14"',
        },
      },

      // Agrega más productos aquí
    ],
  };

  function renderProducts(category) {
    const products = productsData[category];
    productsList.innerHTML = "";

    products.forEach((product, index) => {
      const productHTML = `
            <article class="card-product">
                <h3 class="title-product">${product.title}</h3>
                <p class="brand-model">
                    <span>${product.brand}</span> - <span>${product.model}</span>
                </p>
                <div class="container-img">
                    <span class="discount">-${product.discount}</span>
                    <img class="products-img" src="${product.images[0]}" alt="Imagen del producto" data-product-index="${index}">
                    <div class="button-group">
                        <button type="button">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                        <button type="button">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button type="button">
                            <i class="fa-solid fa-code-compare"></i>
                        </button>
                    </div>
                </div>
                <div class="content-card-product">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="content-price-product">
                        <p class="product-price">${product.price}</p>
                        <p class="product-discount">${product.discountedPrice}</p>
                    </div>
                </div>
                <div class="content-card-product-description">
                    <h3 class="product-description">Descripción</h3>
                    <ul class="content-product-description">
                        <li>Procesador: <span>${product.specs.processor}</span></li>
                        <li>Ram: <span>${product.specs.ram}</span></li>
                        <li>Disco Duro: <span>${product.specs.storage}</span></li>
                        <li>Pantalla: <span>${product.specs.screen}</span></li>
                    </ul>
                </div>
                <button type="button" class="add-cart">Agregar</button>
            </article>
        `;
      productsList.innerHTML += productHTML;

      // Inicia la rotación de imágenes para cada producto
      startImageRotation(product, index);
    });
  }

  function startImageRotation(product, productIndex) {
    const imgElement = productsList.querySelector(
      `.products-img[data-product-index="${productIndex}"]`
    );
    let currentImageIndex = 0;
    const totalImages = product.images.length;

    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % totalImages; // Cambia al siguiente índice
      imgElement.src = product.images[currentImageIndex]; // Cambia la imagen
    }, 7000); // Cambia cada 7 segundos
  }

  menuOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault();

      // Elimina la clase 'active' de todas las opciones
      menuOptions.forEach((opt) => opt.classList.remove("active"));

      // Agrega la clase 'active' a la opción seleccionada
      option.classList.add("active");

      // Renderiza los productos de la categoría seleccionada
      const category = option.getAttribute("data-category");
      renderProducts(category);
    });
  });

  // Mostrar la categoría inicial (Destacados)
  renderProducts("destacados");
});
