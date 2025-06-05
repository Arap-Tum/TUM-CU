const joinBtn = document.querySelectorAll('.join');
const registrationForm = document.getElementById('regModal');
const closeModal = document.getElementById('closeModal')
// const save = document.getElementById('save');



export function openCloseForm() {
    joinBtn.forEach(btn => {
        btn.addEventListener('click', () => {
        registrationForm.style.display = 'block';
    });
 });
    
if (closeModal) {
    closeModal.addEventListener('click', () => {
    registrationForm.style.display = 'none';
    });
}
}

