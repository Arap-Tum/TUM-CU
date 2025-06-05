/*THIS FUNCTION IS TO ENABLE SCROLL EFFECT ON THE HEADER WHEN PAGE IS SCROLLED  */
export function scrollEfect() {
    window.addEventListener('scroll', ()=> {
        const header = document.querySelector('.header-learge');
        const smallScreenHeader = document.querySelector('.small-screen');

        // console.log(smallScreenHeader)
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
            smallScreenHeader.classList.add ('scrolled');
        } else {
            header.classList.remove('scrolled');
            smallScreenHeader.classList.remove('scrolled')
        }
    });
}

// THIS FUNCTION DISPLAYS THE FLOATING modal ONCE THE PAGE IS SCROLED PAST THE WINDOWS 

export function modalDisplayOnScroll() {
          const floatingCta = document.querySelector('.floating-cta');
          const heroSection = document.querySelector('.hero-content');

     if (!floatingCta || !heroSection) return;
     const heroHeight = heroSection.offsetHeight

     console.log(heroHeight)
     console.log(floatingCta)
    window.addEventListener('scroll', ()=> {
       if(window.scrollY > heroHeight) {
         floatingCta.style.display = 'block'
       } else {
        floatingCta.style.display = 'none';
       }
    })
}