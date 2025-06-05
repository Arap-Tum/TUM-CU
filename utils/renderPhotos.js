import { mediaItems } from "../data/mediaData.js";

export function renderGalleryPhotos() {
  //   Check if it is a photo
  // if ((mediaItems.type = "photo")) {
  const galleryGrid = document.getElementById("galleryGrid");

  galleryGrid.innerHTML = "";

  if (mediaItems === "") {
    galleryGrid.innerHTML = `<div class="loading">No Photos available at the moment.</div>`;
  }

  const cardsHTML = mediaItems.map((mediaItem) => createPhotoCard(mediaItem));
  galleryGrid.innerHTML = cardsHTML;
}
//   return;
// }

function createPhotoCard(item) {
  return `<div class="media-card"> <a href="${item.link}" class="media-link"
 target="_blank">
        <div class="media-cover" 
        style= "background-image: url('${item.cover}')" >
        <div class="media-info">
            <h3> ${item.title} </h3>
           
        </div>
        </div>
    </a>
    </div>`;
}
