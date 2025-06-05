import { ministries } from "../data/ministriesData.js";




 export function renderMInistryCards() {
    const ministryGrid = document.getElementById('ministryGrid');
    
    // Clear the existing content 
    ministryGrid.innerHTML = '';

    if (ministries.length === 0) {
        ministryGrid.innerHTML = '<div class="loading">No ministries available at the moment.</div>';
        return;
    }

    // Generate and insert ministry cards
    const cardsHTML = ministries.map(ministry => createMinistryCard(ministry)).join('');

    ministryGrid.innerHTML = cardsHTML;


}


function createMinistryCard(ministry) {

    return `
           <div class="ministry-card">
                    <!-- Ministry image section -->
                    <div class="ministry-image">
                        <img src="${ministry.image}" alt="${ministry.name}" loading="lazy">
                    </div>
                    
                    <!-- Ministry content section -->
                    <div class="ministry-content">
                        <!-- Ministry name/title -->
                        <h2 class="ministry-name">${ministry.name}</h2>
                        
                        <!-- Ministry description -->
                        <p class="ministry-description">${ministry.description}</p>
                        
                        <!-- Responsibilities section -->
                        <div class="ministry-responsibilities">
                            <h3 class="responsibilities-title">Key Responsibilities:</h3>
                            <div class="responsibilities-tags">
                                ${ministry.responsibilities.map(responsibility =>
        `<span class="responsibility-tag">${responsibility}</span>`
    ).join('')}
                            </div>
                        </div>
                        
                        <!-- Call-to-Action button for WhatsApp contact -->
                        <a href="https://wa.me/${ministry.leaderPhone.replace(/\D/g, '')}?text=Hi, I'm interested in joining the ${ministry.name}. Could you please provide more information?" 
                           class="cta-button" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            <span class="whatsapp-icon">📱</span>
                            Contact ${ministry.leaderName}
                        </a>
                    </div>
                </div>
     `;


}