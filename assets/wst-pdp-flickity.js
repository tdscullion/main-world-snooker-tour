document.addEventListener("DOMContentLoaded", function () {
  console.log("WST Flickity init running ✅");

  var galleries = document.querySelectorAll(".js-wst-pdp-flickity");
  console.log("Found galleries:", galleries.length);
  console.log("Flickity global:", typeof Flickity);

  if (!galleries.length) return;
  if (typeof Flickity !== "function") {
    console.warn("Flickity not available, skipping init");
    return;
  }

  galleries.forEach(function (gallery) {
    console.log("Initialising Flickity on", gallery);
    new Flickity(gallery, {
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      draggable: true,
      pageDots: true,
      prevNextButtons: true,
    });
  });
});
