var btnpopup = document.getElementById('btnpopup');
var overlay = document.getElementById('overlay');
var btnclose = document.getElementById('btnclose');

btnpopup.addEventListener('click',openModal);

btnclose.addEventListener('click',closepopup);


function openModal(){
    overlay.style.display = 'block';
}

function closepopup(){
    overlay.style.display = 'none';
}