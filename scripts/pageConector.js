import { openCloseSidebar } from "./sidebar.js";
import { newsletterValidation } from "./footer.js";

// connect pages 
export function  connectSections() {
    fetch('includes/header.html')
    .then(res => res.text())
    .then(data => {
       document.querySelector('.header').innerHTML = data;
       openCloseSidebar()
    //    console.log(document.querySelector('.header-learge'))
    })
    .catch(error => {
        console.log(error)
    });

    fetch('includes/footer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('.footer').innerHTML =data
        newsletterValidation()

    })
}

