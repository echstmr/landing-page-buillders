const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', (event) => {
  navList.classList.toggle('active');
  menuBtn.classList.toggle('open'); // Toggle 'open' class to change burger color
  event.stopPropagation();
});

window.addEventListener('scroll', () => {
  if (navList.classList.contains('active')) {
    navList.classList.remove('active');
    menuBtn.classList.remove('open'); // Reset burger color when scrolling
  }
});

document.addEventListener('click', (event) => {
  if (
    navList.classList.contains('active') &&
    !navList.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    navList.classList.remove('active');
    menuBtn.classList.remove('open'); // Reset burger color when clicking outside
  }
});




function revealFunction(){



    window.sr = ScrollReveal({duration:1350, distance:'100px', easing: 'ease-out'});


    sr.reveal('.reveal-left', {origin:'left', reset:false})
    sr.reveal('.reveal-right', {origin:'right', reset:false})
    sr.reveal('.reveal-top', {origin:'top', reset:false})
    sr.reveal('.reveal-bottom', {origin:'bottom', reset:false})

}




window.addEventListener('load', () =>{

revealFunction();

})


// Go to top button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}