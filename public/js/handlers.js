const X = document.querySelector('.bx-x');
const OpenIns = document.querySelector('#instruction')
const Div = document.querySelector('.instruction-div');

X.addEventListener('click', () => {
    Div.style.display = "none";
})

OpenIns.addEventListener('click', () => {
    Div.style.display = "flex";
})