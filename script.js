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
                <img src="${satuKartuObj.image_path}"/>
                <p class="text-2xl">${satuKartuObj.name}</p>
                <p>${satuKartuObj.description}</p>
                <p>Price: $${satuKartuObj.price}</p>
            `;
  return kartu;
}

// baca json nya
fetch("../products.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // data dapet? bikin dom
    for (const key in data.products) {
      const satuKartuObj = data.products[key];
      satuKartu = bikinSatuKartu(satuKartuObj);
      gallery.appendChild(satuKartu);
    }
  });

/*
####################
# END TEST GALLERY #
####################
*/
