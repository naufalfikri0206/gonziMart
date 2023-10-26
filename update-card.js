let keranjangObj = {};

for (let i = 0; i < DATA_PRODUK.products.length; i++) {
  const satuObjekProduk = DATA_PRODUK.products[i];
  // console.log(satuObjekProduk);
  keranjangObj[satuObjekProduk.name] = 0;
}
console.log(keranjangObj);

const updateButtons = document.querySelectorAll(".btn-cart");
// console.log(updateButtons);
for (let i = 0; i < updateButtons.length; i++) {
  const satuUpdateButton = updateButtons[i];
  // console.log(satuUpdateButton);
  // console.log(satuUpdateButton.getAttribute("nama"));
  satuUpdateButton.addEventListener("click", () => {
    console.log(satuUpdateButton.getAttribute("nama"));
    console.log(satuUpdateButton.getAttribute("tipe"));
    console.log(satuUpdateButton.getAttribute("nama"));
    keranjangObj[satuUpdateButton.getAttribute("nama")  ]++;
    console.log(keranjangObj);
  });
}
