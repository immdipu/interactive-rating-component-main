'use strict'
const submitbtn = document.querySelector('.submitbtn');
const btns = document.querySelectorAll('.btn');
const containerTwo = document.querySelector('.container2');
const container = document.querySelector('.container');
const ratingtext = document.querySelector('.rating');
const tooltip = document.querySelector('.tooltip');


containerTwo.classList.add("hidden");



ratingtext.innerText = " ";



for (const items of btns) {
    items.addEventListener('click', function (e) {
        submitbtn.disabled = false;
        let btnText = e.target.innerText;
        ratingtext.innerText = `You selected ${btnText} out of 5`;

    })
}

if (ratingtext.innerText = " ") {
    submitbtn.disabled = true;

}




submitbtn.addEventListener('click', function () {

    containerTwo.classList.remove("hidden");
    container.classList.add('hidden');

})