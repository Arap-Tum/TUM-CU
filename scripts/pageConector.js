import { openCloseSidebar } from "./sidebar.js";

// connect pages 
export function  connectSections() {
    fetch('./includes/header.html')
    .then(res => res.text())
    .then(data => {
       document.querySelector('.header').innerHTML = data;
       openCloseSidebar()
    })
    .catch(error => {
        console.log(error)
    })
}

