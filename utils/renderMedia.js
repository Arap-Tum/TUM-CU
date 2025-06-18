import { setupSearch } from "../function/search.js";
import { fetchMediaItems } from "../API/allApi.js";

let mediaItems = [];

export async function renderPhotos() {
  const galleryGrid = document.getElementById("galleryGrid");

  galleryGrid.innerHTML = "";

  mediaItems = await fetchMediaItems();

  // console.log(mediaItems);
  // console.log(mediaItems[0]);

  // filter only photo item
  const photosItems = mediaItems.filter((item) =>
    item.type?.toLowerCase().includes("photo")
  );

  // console.log(document.getElementById("gallerySearch"));

  setupSearch("gallerySearch", galleryGrid, photosItems, createCard, ["title"]);

  // console.log(photosItems);

  if (photosItems.length === 0) {
    galleryGrid.innerHTML = `<div class="loading">No Photos available at the moment.</div>`;
    return;
  }

  const cardsHTML = photosItems.map((photosItem) => createCard(photosItem));
  galleryGrid.innerHTML = cardsHTML.join("");
}

// Render videos
export async function renderVideoItem() {
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = "";
  console.log(videoGrid);

  mediaItems = mediaItems = await fetchMediaItems();

  const videoItems = mediaItems.filter((item) =>
    item.type?.toLowerCase().includes("video")
  );

  setupSearch("gallerySearch", videoGrid, videoItems, createCard, ["title"]);

  // console.log(videoItems);

  if (videoItems.length === 0) {
    videoGrid.innerHTML = `<div class="loading">No videos available at the moment.</div>`;
    return;
  }

  const cardsHTML = videoItems.map((videoItem) => createCard(videoItem));
  videoGrid.innerHTML = cardsHTML.join("");
}

// HOMPAGE MEDEA ITEM
export async function renderHomeMedia() {
  const homeMediaGrid = document.getElementById("mediaGrid");

  homeMediaGrid.innerHTML = "";

  mediaItems = mediaItems = await fetchMediaItems();

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
