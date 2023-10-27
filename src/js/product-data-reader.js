/**
 * script ini membaca hard coded DATA_PRODUK
 * DATA_PRODUK dipakai untuk mengisi html tag dengan class .product-gallery
 */

/**
 * ###############
 * # PRODUK DATA #
 * ###############
 */

const DATA_PRODUK = [
  {
    name: "Classic",
    description:
      "Jaket denim abadi yang sempurna untuk segala musim. Terbuat dari denim berkualitas tinggi dengan kenyamanan maksimal.",
    price: 59.99,
    category: "women",
    image_path: "../assets/images/classic_denim_jacket.png",
  },
  {
    name: "Gaun",
    description:
      "Buat pernyataan pada acara formal berikutnya dengan gaun malam elegan ini. Memiliki siluet yang mempesona dan detail manik-manik yang rumit.",
    price: 149.99,
    category: "women",
    image_path: "../assets/images/elegant_evening_gown.png",
  },
  {
    name: "Kaos",
    description:
      "Tunjukkan gaya unik Anda dengan koleksi kaos grafis kami. Terbuat dari katun lembut dan tersedia dalam berbagai desain.",
    price: 19.99,
    category: "women",
    image_path: "../assets/images/graphic_tshirt.png",
  },
  {
    name: "Sweater",
    description:
      "Tetap hangat dan modis dalam sweater rajut nyaman kami. Sempurna untuk hari-hari dingin, dengan potongan longgar dan pola rajut beragam.",
    price: 39.99,
    category: "women",
    image_path: "../assets/images/cozy_knit_sweater.png",
  },
  {
    name: "Legging",
    description:
      "Capai tujuan kebugaran Anda dengan legging performa tinggi ini. Menyerap kelembapan dan nyaman untuk segala jenis latihan.",
    price: 29.99,
    category: "women",
    image_path: "../assets/images/athletic_leggings.png",
  },
  {
    name: "Topi",
    description:
      "Lengkapi tampilan musim panas Anda dengan topi pantai bernuansa vintage. Tepi lebar untuk perlindungan dari matahari dan aksen pita modis.",
    price: 24.99,
    category: "women",
    image_path: "../assets/images/vintage_sun_hat.png",
  },
  {
    name: "Kemeja",
    description:
      "Tampil tajam dengan kemeja jas pria terkini kami. Terbuat dari kain yang bernapas dan dirancang untuk kenyamanan sepanjang hari.",
    price: 49.99,
    category: "man",
    image_path: "../assets/images/mens_dress_shirt.png",
  },
  {
    name: "Gaun",
    description:
      "Sambut vibra boho-chic dengan gaun maxi aliran ini. Memiliki cetakan berwarna-warni, tali bahu yang dapat disesuaikan, dan potongan yang nyaman.",
    price: 54.99,
    category: "women",
    image_path: "../assets/images/boho_maxi_dress.png",
  },
  {
    name: "Onesie",
    description:
      "Jaga anak Anda tetap hangat dan lucu dengan onesie unicorn yang menggemaskan ini. Lembut dan berbulu, sempurna untuk bermain atau tidur.",
    price: 24.99,
    category: "kid",
    image_path: "../assets/images/kids_unicorn_onesie.png",
  },
  {
    name: "Jaket",
    description:
      "Tetap hangat saat musim paling dingin dengan jaket puffer musim dingin kami. Diisi untuk kehangatan ekstra dan tersedia dengan penutup bulu sintetis.",
    price: 79.99,
    category: "women",
    image_path: "../assets/images/winter_puffer_jacket.png",
  },
];

// DOM REF
const GALLERY = document.querySelector(".product-gallery");

/**
 * ##########
 * # HELPER #
 * ##########
 */
function bikinSatuKartu(satuKartuObj) {
  // input DATA_PRODUK, output kartu (html card tag)

  // buat kartu
  const KARTU = document.createElement("card");

  // set attribut nya (buat filter ato update keranjang)
  KARTU.setAttribute("data-category", `${satuKartuObj.category}`);

  // set class, product class buat DOM REF
  KARTU.className = "flex flex-col text-center product";

  // bangun isinya
  KARTU.innerHTML = `
  <div class="rounded-xl overflow-hidden shadow-xl p-4">
  <img src="${satuKartuObj.image_path}" class="rounded-lg"/>
  <p class="text-2xl font-light pt-2">${satuKartuObj.name}</p>
  <p class="font-semibold">Harga: $${satuKartuObj.price}</p>
  <div class="flex justify-center gap-2 item-center" style="margin-top: auto">
    <button type="add" name=${satuKartuObj.name} class="btn-cart btn-tambah bg-black text-white hover:rounded-lg rounded-xl px-12 py-2"> Add to chart <i class="bi bi-cart4"></i></button>
    <button type="del" name=${satuKartuObj.name} class="btn-cart btn-tambah border-2 border-black hover:bg-black hover:text-white rounded-xl px-4 py-2"> - </button>
  </div>
</div>
                `;

  // udh jdi, balikin
  return KARTU;
}

// iter DATA_PRODUK
DATA_PRODUK.forEach((satuProdukObj) => {
  // pke helper buat bkin kartu
  satuKartu = bikinSatuKartu(satuProdukObj);
  // masukin kartu ke GALLERY
  GALLERY.appendChild(satuKartu);
});
