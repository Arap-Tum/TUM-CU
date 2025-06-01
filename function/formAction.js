const joinUsBtn = document.getElementById('joinUs');
const registrationForm = document.getElementById('regModal');
const closeModal = document.getElementById('closeModal')
const save = document.getElementById('save');



export function openCloseForm() {
    joinUsBtn.addEventListener('click', () => {
        registrationForm.style.display = 'block';
    })
    closeModal.addEventListener('click', () => {
        registrationForm.style.display = 'none';
    })
}

export function formSubmison() {
    save.addEventListener('clik', () => {

    })
}