'use strict';

const modal = document.querySelectorAll('.modal');

const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const modal4 = document.querySelector('.modal-4');
const modal5 = document.querySelector('.modal-5');
const modal6 = document.querySelector('.modal-6');
const modal7 = document.querySelector('.modal-7');

const overlay = document.querySelector('.overlay');

const btnClose1 = document.querySelector('.close-modal-1');
const btnClose2 = document.querySelector('.close-modal-2');
const btnClose3 = document.querySelector('.close-modal-3');
const btnClose4 = document.querySelector('.close-modal-4');
const btnClose5 = document.querySelector('.close-modal-5');
const btnClose6 = document.querySelector('.close-modal-6');
const btnClose7 = document.querySelector('.close-modal-7');


const btnOpen1 = document.querySelector('.show-modal-1');
const btnOpen2 = document.querySelector('.show-modal-2');
const btnOpen3 = document.querySelector('.show-modal-3');
const btnOpen4 = document.querySelector('.show-modal-4');
const btnOpen5 = document.querySelector('.show-modal-5');
const btnOpen6 = document.querySelector('.show-modal-6');
const btnOpen7 = document.querySelector('.show-modal-7');


const openModal1 = function() {
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openModal2 = function() {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openModal3 = function() {
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openModal4 = function() {
    modal4.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openModal5 = function() {
    modal5.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openModal6 = function() {
    modal6.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const openModal7 = function() {
    modal7.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


const closeModal1 = function() {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal2 = function() {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal3 = function() {
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal4 = function() {
    modal4.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal5 = function() {
    modal5.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal6 = function() {
    modal6.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal7 = function() {
    modal7.classList.add('hidden');
    overlay.classList.add('hidden');
}


/*
for (let i = 0; i < btnOpen1.length; i++) {
    btnOpen1[i].addEventListener('click', openModal)
};
*/

btnOpen1.addEventListener('click', openModal1);
btnOpen2.addEventListener('click', openModal2);
btnOpen3.addEventListener('click', openModal3);
btnOpen4.addEventListener('click', openModal4);
btnOpen5.addEventListener('click', openModal5);
btnOpen6.addEventListener('click', openModal6);
btnOpen7.addEventListener('click', openModal7);


btnClose1.addEventListener('click', closeModal1);
btnClose2.addEventListener('click', closeModal2);
btnClose3.addEventListener('click', closeModal3);
btnClose4.addEventListener('click', closeModal4);
btnClose5.addEventListener('click', closeModal5);
btnClose6.addEventListener('click', closeModal6);
btnClose7.addEventListener('click', closeModal7);



