import { mediaItems } from "../data/mediaData.js";

export function displayMedia() {
    const mediaSection = document.querySelector('.media-display');

    mediaItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'media-card';

        card.innerHTML = `
        <a href="${item.link}" class="media-link"
 target="_blank">
        <div class="media-cover" 
        style= "background-image: url('${item.cover}')" >
        <div class="media-info">
            <h3> ${item.title} </h3>
            <button> View </button>
        </div>
        </div>
    </a>


 `;
 console.log(card)

        mediaSection.appendChild(card);
    })
}