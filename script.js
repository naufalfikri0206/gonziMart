/*
######################
# START TEST GALLERY #
######################
*/
// DOM REF
const gallery = document.querySelector(".product-gallery");

function bikinSatuKartu(satuKartuObj) {
  // fungsi ini bikin satu kartu, butuh jsonData
  // price pake toFixed biar 2 decimal aja
  const kartu = document.createElement("card");
  kartu.className = "flex flex-col text-center";
  kartu.innerHTML = `
                <img src="${satuKartuObj.image_path}" class="rounded-lg"/>
                <p class="text-2xl font-semibold">${satuKartuObj.name}</p>
                <p>Price: $${satuKartuObj.price}</p>
            `;
  return kartu;
}

// baca json nya

const DATA_PRODUK = {
  products: [{
      id: 1,
      name: "Classic Denim Jacket",
      description: "Jaket denim abadi yang sempurna untuk segala musim. Terbuat dari denim berkualitas tinggi dengan kenyamanan maksimal.",
      price: 59.99,
      categories: "women",
      image_path: "../assets/images/classic_denim_jacket.png",
    },
    {
      id: 2,
      name: "Gaun Malam Elegan",
      description: "Buat pernyataan pada acara formal berikutnya dengan gaun malam elegan ini. Memiliki siluet yang mempesona dan detail manik-manik yang rumit.",
      price: 149.99,
      categories: "women",
      image_path: "../assets/images/elegant_evening_gown.png",
    },
    {
      id: 3,
      name: "Kaos Grafis Kasual",
      description: "Tunjukkan gaya unik Anda dengan koleksi kaos grafis kami. Terbuat dari katun lembut dan tersedia dalam berbagai desain.",
      price: 19.99,
      categories: "women",
      image_path: "../assets/images/graphic_tshirt.png",
    },
    {
      id: 4,
      name: "Sweater Rajut Nyaman",
      description: "Tetap hangat dan modis dalam sweater rajut nyaman kami. Sempurna untuk hari-hari dingin, dengan potongan longgar dan pola rajut beragam.",
      price: 39.99,
      categories: "Kid",
      image_path: "../assets/images/cozy_knit_sweater.png",
    },
    {
      id: 5,
      name: "Legging Performa Atletik",
      description: "Capai tujuan kebugaran Anda dengan legging performa tinggi ini. Menyerap kelembapan dan nyaman untuk segala jenis latihan.",
      price: 29.99,
      categories: "Man",
      image_path: "../assets/images/athletic_leggings.png",
    },
    {
      id: 6,
      name: "Topi Pantai Bernuansa Vintage",
      description: "Lengkapi tampilan musim panas Anda dengan topi pantai bernuansa vintage. Tepi lebar untuk perlindungan dari matahari dan aksen pita modis.",
      price: 24.99,
      categories: "Kid",
      image_path: "../assets/images/vintage_sun_hat.png",
    },
    {
      id: 7,
      name: "Kemeja Jas Pria Terkini",
      description: "Tampil tajam dengan kemeja jas pria terkini kami. Terbuat dari kain yang bernapas dan dirancang untuk kenyamanan sepanjang hari.",
      price: 49.99,
      categories: "Kid",
      image_path: "../assets/images/mens_dress_shirt.png",
    },
    {
      id: 8,
      name: "Gaun Maxi Boho-Chic",
      description: "Sambut vibra boho-chic dengan gaun maxi aliran ini. Memiliki cetakan berwarna-warni, tali bahu yang dapat disesuaikan, dan potongan yang nyaman.",
      price: 54.99,
      categories: "women",
      image_path: "../assets/images/boho_maxi_dress.png",
    },
    {
      id: 9,
      name: "Onesie Unicorn Anak",
      description: "Jaga anak Anda tetap hangat dan lucu dengan onesie unicorn yang menggemaskan ini. Lembut dan berbulu, sempurna untuk bermain atau tidur.",
      price: 24.99,
      categories: "women",
      image_path: "../assets/images/kids_unicorn_onesie.png",
    },
    {
      id: 10,
      name: "Jaket Puffer Musim Dingin",
      description: "Tetap hangat saat musim paling dingin dengan jaket puffer musim dingin kami. Diisi untuk kehangatan ekstra dan tersedia dengan penutup bulu sintetis.",
      price: 79.99,
      categories: "Man",
      image_path: "../assets/images/winter_puffer_jacket.png",
    },
  ],
};

// fetch("DATA_PRODUCT")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // data dapet? bikin dom
//     console.log(data);
//     for (const key in data.products) {
//       const satuKartuObj = data.products[key];
//       satuKartu = bikinSatuKartu(satuKartuObj);
//       gallery.appendChild(satuKartu);
//     }
//   });
const data = DATA_PRODUK;
for (const key in data.products) {
  const satuKartuObj = data.products[key];
  const id = data.products[key].id;
  satuKartu = bikinSatuKartu(satuKartuObj);
  gallery.appendChild(satuKartu);
}
// <p>${satuKartuObj.description}</p>

/*
####################
# END TEST GALLERY #
####################
*/