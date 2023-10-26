/**
 * script ini bertanggung jawab untk filter produk
 * membutuhkan 2 tag, .category-button dan .product
 * algo ny: sembunyiin semuanya dlu, tampilin produk yng kategori ny sama dngn tombol yng di klik
 */

// DOM REF
const CATEGORY_BUTTONS = document.querySelectorAll(".category-button");
const PRODUCTS = document.querySelectorAll(".product");

// iter CATEGORY_BUTTONS
CATEGORY_BUTTONS.forEach((button) => {
  // tempel event click ke tiap button
  button.addEventListener("click", () => {
    // ini callback ny
    const CHOOSEN_CATEGORY = button.getAttribute("data-category");
    console.log(CHOOSEN_CATEGORY);

    // hide all di awalnya
    PRODUCTS.forEach((product) => {
      product.classList.add("hide");
    });

    // pilih all? show all
    if (CHOOSEN_CATEGORY === "all") {
      PRODUCTS.forEach((product) => {
        product.classList.remove("hide");
      });

      // pilih kategori? show produk yng kategori ny sama
    } else {
      PRODUCTS.forEach((product) => {
        const productCategory = product.getAttribute("data-category");
        if (productCategory === CHOOSEN_CATEGORY) {
          product.classList.remove("hide");
        }
      });
    }
  });
});
