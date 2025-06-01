export function openCloseSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('closeSidebar');
    const hamburger = document.getElementById('hamburger');

    // Open sidebar 
    hamburger.addEventListener('click', () => {
        sidebar.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    // Close sidebar on x
    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    // Close sidebar when clicking outside 
    overlay.addEventListener('click', () => {
        sidebar.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    // Display the drop down menu 
    // const dropdowns = document.querySelectorAll('.dropdown .nav-item .nav-link');
    const dropdowns = document.querySelectorAll('.nav-item.dropdown > .nav-link');

    // console.log(dropdowns)

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
     
            const parent = this.parentElement;
            const dropdownMenu = this.nextElementSibling;

            // console.log(parent, dropdownMenu)

            // Toggle active state for current dropdown
            parent.classList.toggle('active')
            dropdownMenu.classList.toggle('show')

            // If opening this dropdown, close onother 
            if (parent.classList.contains('active')) {
                dropdowns.forEach(otherDropdown => {
                  if(otherDropdown !== this) {
                    const otherParent = otherDropdown.parentElement;
                    const otherMenu = otherDropdown.nextElementSibling;

                    otherParent.classList.remove('active');
                    otherMenu.classList.remove('show')
                }
                })
            }
        })
    })

}