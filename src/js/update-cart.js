/**
 * script ini bertanggung jawab untk update keranjangObj
 * membutuhkan 2 tag, .category-button dan .product
 * algo ny: sembunyiin semuanya dlu, tampilin produk yng kategori ny sama dngn tombol yng di klik
 */

// DOM REF
const UPDATE_BUTTONS = document.querySelectorAll(".btn-cart");
const MODAL_BODY = document.querySelector(".modal-body");

// DATA KERANJANG USER
let keranjangObj = {};

// iter DATA_PRODUK, isi keranjangObj dngn produk di data (val ny 0 awalnya)
DATA_PRODUK.forEach((satuObjekProduk) => {
  keranjangObj[satuObjekProduk.name] = 0;
  keranjangObj[satuObjekProduk.image_path];
});

// iter UPDATE_BUTTONS, tempelin signal ke callback
UPDATE_BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    // callback
    const NAME = button.getAttribute("name");
    const TYPE = button.getAttribute("type");
    // bedasarkan tipe, + / - value dri keranjangObj
    switch (TYPE) {
      case "add":
        keranjangObj[NAME]++;
        updateModalBody();
        break;
      case "del":
        keranjangObj[NAME]--;
        keranjangObj[NAME] = Math.max(0, keranjangObj[NAME]);
        updateModalBody();
        break;

      default:
        break;
    }
  });
});

// MODAL_BODY - isi div ini sama data di keranjangObj
function updateModalBody() {
  // Clear the current content of MODAL_BODY
  MODAL_BODY.innerHTML = "";

  // Iterate through keranjangObj
  for (const productName in keranjangObj) {
    const QUANTITY = keranjangObj[productName];

    // Create a div element to display the product and its quantity
    const PRODUCT_DIV = document.createElement("div");
    PRODUCT_DIV.innerHTML = `
    <div class="flex flex-col">
    <p class="text-black text-start text-2xl">Item : <span class="underline">${productName}</span></p>
    <p class=""> Quantity : <span class="font-bold">${QUANTITY}</span></p>
    </div>
    
    
    `;

    // Append the productDiv to MODAL_BODY
    MODAL_BODY.appendChild(PRODUCT_DIV);
  }
}

// Call the function to initially populate MODAL_BODY
updateModalBody();

// export default { keranjangObj };
