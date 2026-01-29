const flipbookContainer = document.getElementById("flipbook");

/*
  Ukuran asli:
  1 halaman  : 2362 x 3543
  Doublepage : 4724 x 3543
*/

const pageFlip = new St.PageFlip(flipbookContainer, {
    width: 2362,
    height: 3543,

    size: "stretch",           // menyesuaikan layar
    minWidth: 320,
    maxWidth: 2362,
    minHeight: 450,
    maxHeight: 3543,

    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: false,
    useMouseEvents: true,

    flippingTime: 900,          // animasi smooth
    swipeDistance: 30
});

// LIST GAMBAR
const pages = [];
for (let i = 1; i <= 40; i++) {
    pages.push(`images/page${String(i).padStart(2, "0")}.jpg`);
}

// LOAD GAMBAR
pageFlip.loadFromImages(pages);

// OPTIONAL: keyboard support
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") pageFlip.flipNext();
    if (e.key === "ArrowLeft") pageFlip.flipPrev();
});
