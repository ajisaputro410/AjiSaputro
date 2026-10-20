// =====================================================
// POP-UP EXPERIENCE GALLERY
// =====================================================
let currentImageIndex = 0;
let mediaList = [];

function initExperienceGallery() {
  const images = document.querySelectorAll(".experience-media-preview img");
  mediaList = [];
  images.forEach((img, index) => {
    mediaList.push({
      src: img.getAttribute("src"),
      caption: img.getAttribute("alt") || "Work preview"
    });
    img.setAttribute("data-index", index);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initExperienceGallery);
} else {
  initExperienceGallery();
}

function openModal(element) {
  if (mediaList.length === 0) initExperienceGallery();

  currentImageIndex = parseInt(element.getAttribute("data-index"), 10) || 0;
  const modal = document.getElementById("galleryModal");
  if (!modal) return;

  updateModalContent();
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function updateModalContent() {
  const modalImg = document.getElementById("modalImage");
  const modalCap = document.getElementById("modalCaption");
  const item = mediaList[currentImageIndex];
  if (!modalImg || !item) return;

  modalImg.src = item.src;
  modalImg.alt = item.caption;
  if (modalCap) modalCap.textContent = item.caption;
}

function changeImage(direction, event) {
  if (event) event.stopPropagation();
  currentImageIndex += direction;
  if (currentImageIndex >= mediaList.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = mediaList.length - 1;
  updateModalContent();
}

function closeModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) modal.classList.remove("show");
  document.body.style.overflow = "";
}

// Klik area gelap (di luar foto dan tombol) untuk menutup
document.addEventListener("click", event => {
  const modal = document.getElementById("galleryModal");
  if (modal && event.target === modal) closeModal();
});

// Keyboard: Esc, panah kiri/kanan
document.addEventListener("keydown", event => {
  const modal = document.getElementById("galleryModal");
  if (!modal || !modal.classList.contains("show")) return;

  if (event.key === "Escape") closeModal();
  else if (event.key === "ArrowRight") changeImage(1);
  else if (event.key === "ArrowLeft") changeImage(-1);
});