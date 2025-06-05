import { eteams } from "../data/eteamsData.js";

export function renderEteamsCards() {
  const eteamsGrid = document.getElementById("eteamsGrid");

  if (eteams === "") {
    eteamsGrid.innerHTML = `<div class="loading">No eteams available at the moment.</div>`;
  }

  //   Generate and insert
  const coardsHtml = eteams.map((eteam) => createEteamCard(eteam)).join("");

  eteamsGrid.innerHTML = coardsHtml;
}

function createEteamCard(eteam) {
  return `
      <div class="ministry-card">
                    <!-- Ministry image section -->
                    <div class="ministry-image">
                        <img src="${eteam.image}" alt="${
    eteam.name
  }" loading="lazy">
                    </div>
                    
                    <!-- Ministry content section -->
                    <div class="ministry-content">
                        <!-- Ministry name/title -->
                        <h2 class="ministry-name">${eteam.name}</h2>
                        
                        <!-- Ministry description -->
                        <p class="ministry-description">${eteam.description}</p>
                        
                        <!-- Responsibilities section -->
                        <div class="ministry-responsibilities">
                            <h3 class="responsibilities-title">Key Responsibilities:</h3>
                            <div class="responsibilities-tags">
                                ${eteam.responsibilities
                                  .map(
                                    (responsibility) =>
                                      `<span class="responsibility-tag">${responsibility}</span>`
                                  )
                                  .join("")}
                            </div>
                        </div>
                        
                        <!-- Call-to-Action button for WhatsApp contact -->
                        <a href="https://wa.me/${eteam.leaderPhone.replace(
                          /\D/g,
                          ""
                        )}?text=Hi, I'm interested in joining the ${
    eteam.name
  }. Could you please provide more information?" 
                           class="cta-button" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            <span class="whatsapp-icon">📱</span>
                            Contact ${eteam.leaderName}
                        </a>
                    </div>
                </div>
     `;
}
