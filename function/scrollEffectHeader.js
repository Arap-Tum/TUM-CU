/*THIS FUNCTION IS TO ENABLE SCROLL EFFECT ON THE HEADER WHEN PAGE IS SCROLLED  */
export function scrollEfect() {
    window.addEventListener('scroll', ()=> {
        const header = document.querySelector('.header-learge');
        const smallScreenHeader = document.querySelector('.small-screen');

        console.log(smallScreenHeader)
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
            smallScreenHeader.classList.add ('scrolled');
        } else {
            header.classList.remove('scrolled');
            smallScreenHeader.classList.remove('scrolled')
        }
    });
}