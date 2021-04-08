var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

window.onscroll = function() {
  onscrollFunction()
}
var navbar = document.getElementById("myNavbar");
var sticky = navbar.offsetTop;
function onscrollFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  }
}

// modals
var modal = document.getElementById("popupModal");
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementById("submitBtn");
var name = document.getElementById("nameBlock");
var email = document.getElementById("emailBlock");
window.addEventListener("load", showModal);
span.addEventListener("click", closeModal);
submitBtn.addEventListener("click", popUp);

function showModal() {
  modal.style.display = "block";
}
function closeModal(){
  modal.style.display = "none";
}
function popUp(){
  if (nameBlock.length > 0 || emailBlock.length > 0) {
    alert("Your Details Have Been Submitted");
  }
  else {
    alert("Please Fill Your Details First");
  }
}


// teach modal
var teachModal = document.getElementById("teachModal");
var closeClick = document.getElementById("closeClick");
var submit = document.getElementById("teachJoin");
var teachBtn = document.getElementById("teach");
var closeBtn = document.getElementById("closeBtn");

submit.addEventListener("click", closeTeach);
closeClick.addEventListener("click", closeTeach);
closeBtn.addEventListener("click", closeTeach);
function closeTeach() {
  teachModal.style.display ="none";
}
teachBtn.addEventListener("click", openTeach);
function openTeach() {
  teachModal.style.display = "block";
}

// donateModal
var donateModal = document.getElementById("donateModal");
var closeClick = document.getElementById("closeClick");
var submit = document.getElementById("donateUs");
var donateBtn = document.getElementById("donate");
var closeBtn2 = document.getElementById("closeBtn2");


submit.addEventListener("click", closeDonate);
closeClick.addEventListener("click", closeDonate);
closeBtn2.addEventListener("click", closeDonate);

function closeDonate() {
  donateModal.style.display ="none";
}

donateBtn.addEventListener("click", openDonate);

function openDonate() {
  donateModal.style.display = "block";
}


var animImg = document.getElementsByClassName("animImg");

animImg.addEventListener("click", animateFunction);

function animateFunction(){
  animImg.style.borderRadius = "45%";
}
