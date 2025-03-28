const buttons = document.querySelectorAll('.button');
const toastBox = document.querySelector('.toast');
const toastIconContainer = document.querySelector('.toast-icon');
const toastMessage = document.querySelector('.toast-message');
const processElement = document.querySelector('.proccess-bar');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {

    toastBox.style.display = 'block';
    toastBox.className = 'toast';
    toastIconContainer.innerHTML = '';

    let btnType = btn.dataset.type;

    if (btnType === 'success') {
      toastBox.classList.add('success');
      toastIconContainer.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      toastMessage.textContent = 'Action was successful!';
    } else if (btnType === 'warning') {
      toastBox.classList.add('warning');
      toastIconContainer.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
      toastMessage.textContent = 'This is a warning.';
    } else if (btnType === 'info') {
      toastBox.classList.add('info');
      toastIconContainer.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
      toastMessage.textContent = 'Here is some information.';
    } else {
      toastBox.classList.add('danger');
      toastIconContainer.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';
      toastMessage.textContent = 'An error occurred!';
    }

    setTimeout(() => {
      toastBox.style.display = 'none';
    }, 3000);
  });
});