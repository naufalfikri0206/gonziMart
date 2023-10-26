/**
 * script ini bertanggung jawab untk nampilin / sembunyiin modal
 * membutuhkan 2 tag, .category-button dan .product
 * algo ny: sembunyiin semuanya dlu, tampilin produk yng kategori ny sama dngn tombol yng di klik
 */

// DOM REF
const MODAL_BUTTON = document.querySelector("#modal-btn");
const MODAL_EXIT_BUTTON = document.querySelector("#modal-exit");

// ambil target tombolny
const BUTTON_DATA_TARGET = MODAL_BUTTON.getAttribute("data-target");
const TARGET = document.querySelector(BUTTON_DATA_TARGET);

// koneksi signal ke callback (modalToggle)
MODAL_BUTTON.addEventListener("click", modalToggle);
MODAL_EXIT_BUTTON.addEventListener("click", modalToggle);

function modalToggle(event) {
  /**
   * callback to toggle
   * Harus bedain msk / keluar
   * Karena klo block prop berubah, hrus nngu 1 frame buat transisi untk update
   */
  //

  // lgi msk / keluar?
  let isExit = TARGET.classList.contains("block");

  // masuk? disp ke block
  if (!isExit) TARGET.classList.add("block");

  // konek signal buat frame abis repaint
  requestAnimationFrame(() => onNextFrame(isExit));
}

function onNextFrame(isExit) {
  /**
   * udh 1 frame skrng
   * transisi bisa main
   * klo lgi keluar block ny di buang abis transisi beres
   * transisi beres ga ad event jdi pke timer event aj, samain delay sama wktu transisi
   */
  //
  TARGET.classList.toggle("show");
  TARGET.setAttribute("aria-hidden", !isExit);
  if (isExit) {
    setTimeout(function () {
      TARGET.classList.remove("block");
    }, 150); // 150 milliseconds = same as the transition time
  }
}
