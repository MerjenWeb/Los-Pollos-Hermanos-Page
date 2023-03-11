'use strict';
const images = document.querySelectorAll('.image');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

function openModal() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

for (const image of images) {
  image.addEventListener('click', openModal);
}
backdrop.addEventListener('click', closeModal);
