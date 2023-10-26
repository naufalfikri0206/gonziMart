// document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-button");
    const products = document.querySelectorAll(".product");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedCategory = button.getAttribute("data-category");
            
            // Semua produk disembunyikan terlebih dahulu
            products.forEach(product => {
                product.style.display = "none";
            });

            // Tampilkan produk sesuai kategori yang dipilih
            if (selectedCategory === "all") {
                products.forEach(product => {
                    product.style.display = "block";
                });
            } else {
                products.forEach(product => {
                    const productCategory = product.getAttribute("data-category");
                    if (productCategory === selectedCategory) {
                        product.style.display = "block";
                    }
                });
            }
        });
    });
// });