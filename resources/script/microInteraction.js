const calcBtn = document.getElementById('calcBtn');
const conImg = document.querySelector('.container-img');
const calcForm = document.querySelector('.calculator-form');

calcBtn.addEventListener("click", function(){
    conImg.classList.toggle('hidden');
    calcBtn.classList.toggle('hidden');
    calcForm.classList.toggle('hidden');
})