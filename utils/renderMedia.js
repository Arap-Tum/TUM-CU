import { mediaItems } from "../data/mediaData.js";

export function renderPhotos() {
  const galleryGrid = document.getElementById("galleryGrid");

  galleryGrid.innerHTML = "";

  // filter only photo item
  const photosItems = mediaItems.filter(
    (mediaItems) => mediaItems.type === "photos"
  );

  console.log(photosItems);
  if (photosItems.length === 0) {
    galleryGrid.innerHTML = `<div class="loading">No Photos available at the moment.</div>`;
    return;
  }

  const cardsHTML = photosItems.map((photosItem) => createCard(photosItem));
  galleryGrid.innerHTML = cardsHTML.join("");
}

// Render videos
export function renderVideoItem() {
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = "";

  const videoItems = mediaItems.filter((item) => item.type === "video");
  if (videoItems.length === 0) {
    galleryGrid.innerHTML = `<div class="loading">No videos available at the moment.</div>`;
    return;
  }

  console.log(videoItems);

  const cardsHTML = videoItems.map((videoItem) => createCard(videoItem));
  videoGrid.innerHTML = cardsHTML.join("");
}

// HOMPAGE MEDEA ITEM
export function renderHomeMedia() {
  const homeMediaGrid = document.getElementById("mediaGrid");

  homeMediaGrid.innerHTML = "";

  const sortedMediaItem = mediaItems.sort((a, b) => {
    const getComparbleId = (item) => {
      if (item._id) {
        // Simulate timstamp from mongoDb _id
        return parseInt(item._id.substring(0, 8), 16);
      } else {
        return item.Id || item.Id || 0;
        // Fall for frontend-only data
      }
    };
    return getComparbleId(b) - getComparbleId(a);
  });

  const latestItems = sortedMediaItem.slice(0, 8); //this limits the result

  const cardsHTML = latestItems.map((latestItem) => createCard(latestItem));
  homeMediaGrid.innerHTML = cardsHTML.join("");
}

function createCard(item) {
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
