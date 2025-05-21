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
}