// Bootstrap Tooltip Initialization
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Swiper Initialization
const swiper = new Swiper('.slider-wrapper', { 
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, // Fixed typo from 'dymaicBullets'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Navbar Scroll Effect
window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");
  if (navbar) { // Added null check to prevent errors
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// ตรวจสอบเมื่อกดปุ่ม hamburger
const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

// เมื่อคลิกที่ปุ่ม hamburger
navbarToggler.addEventListener('click', function() {
    navbar.classList.toggle('open');
});

// Disable scroll initially
document.body.classList.add('no-scroll');

// Enable scroll when Get Started button is clicked
document.getElementById('scroll-btn').addEventListener('click', function() {
  document.body.classList.remove('no-scroll');
  // Optionally, scroll to the Members section after enabling scroll
  document.getElementById('members').scrollIntoView({ behavior: 'smooth' });
});

// JavaScript to unlock scrolling when the button is clicked
document.getElementById('scroll-btn').addEventListener('click', function() {
  document.body.classList.remove('no-scroll'); // ลบคลาส 'no-scroll' เพื่อให้เลื่อนหน้าได้
});

  // รับปุ่มและ audio element
  const toggleButton = document.getElementById('toggle-audio');
  const audioElement = document.getElementById('background-audio');

  // ตั้งค่าให้เพลงเริ่มเล่นเมื่อกดปุ่ม
  toggleButton.addEventListener('click', function() {
    if (audioElement.paused) {
      audioElement.play(); // เล่นเพลง
      toggleButton.textContent = 'Pause Music'; // เปลี่ยนข้อความปุ่มเป็น "Pause Music"
    } else {
      audioElement.pause(); // หยุดเพลง
      toggleButton.textContent = 'Play Music'; // เปลี่ยนข้อความปุ่มเป็น "Play Music"
    }
  });

