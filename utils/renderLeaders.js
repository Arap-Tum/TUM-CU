import { fetchLeaders } from "../API/allApi.js";

// Load and display leaders
export async function loadLeaders() {
  try {
    const leaders = await fetchLeaders();

    console.log(leaders);
    const loadingContainer = document.getElementById("loadingContainer");
    const leadersContainer = document.getElementById("leadersGrid");

    // Hide loading, show leaders
    loadingContainer.style.display = "none";
    leadersContainer.style.display = "grid";

    // Create and insert leader cards
    leadersContainer.innerHTML = leaders.map(createLeaderCard).join("");

    // Add entrance animation
    const cards = document.querySelectorAll(".leader-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  } catch (error) {
    console.error("Error loading leaders:", error);
    document.getElementById("loadingContainer").innerHTML =
      '<p style="color: var(--text-light);">Sorry, we couldn\'t load our leaders right now. Please try again later.</p>';
  }
}

// Create leader card HTML
function createLeaderCard(leader) {
  return `
                <div class="leader-card">
                    <img src="${leader.cover}" alt="${leader.name}" class="leader-photo" onerror="this.src='https://via.placeholder.com/300x450/006400/ffffff?text=Photo'">
                    <div class="leader-info">
                        <h3 class="leader-name">${leader.name}</h3>
                        <div class="leader-position">${leader.position}</div>
                        
                        <div class="leader-details">
                            <div class="detail-item">
                                <svg class="detail-icon" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                </svg>
                                <span>${leader.year} • ${leader.course}</span>
                            </div>                          
                        </div>
                    </div>
                </div>
            `;
}
