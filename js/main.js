$(document).ready( function() {

  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  const auto = true;
  const intervalTime = 3000;
  let slideInterval;


  const nextSlide = () => {
      // get current class
      const current = document.querySelector('.current');
      // remove current class
      current.classList.remove('current');
      // check for next slide
      if (current.nextElementSibling) {
          //add current to next sibling
          current.nextElementSibling.classList.add('current');
      } else {
          //add current to start
          slides[0].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
  }

  const prevSlide = () => {
      // get current class
      const current = document.querySelector('.current');
      // remove current class
      current.classList.remove('current');
      // check for prev slide
      if (current.previousElementSibling) {
          //add current to prev sibling
          current.previousElementSibling.classList.add('current');
      } else {
          //add current to last
          slides[slides.length - 1].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
  }

  // button events

  next.addEventListener('click', e => {
      nextSlide();
      if (auto) {
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, intervalTime);
      }
  });

  prev.addEventListener('click', e => {
      prevSlide();
      if (auto) {
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, intervalTime);
      }
  });


  // auto scroll

  if (auto) {
      //run next slide at interval time
      slideInterval = setInterval(nextSlide, intervalTime);
  }


const menuPos = $(".menu").position();

  // Menu
  $(window).scroll( function() {
    stickyMenuBar($(".menu"), menuPos)
  });
  //console.log(stickyMenuBar());

  // var navbar = $(".menu");
  //var navbar = document.querySelector(".menu");
  //var sticky = navbar.offsetTop;

//  console.log(navbar);
  //console.log(sticky);

  function stickyMenuBar(navbar, pos) {
    //console.log($(window).scrollTop());
    //console.log(pos);
    // if (window.pageYOffset >= sticky) {
    if ($(window).scrollTop() >= pos.top) {
      // navbar.classList.add("sticky")
      navbar.addClass("sticky");
      //navbar.style.background
      //console.log("It's sticky");
    } else {
      navbar.removeClass("sticky");
      //console.log("It's not sticky anymore");
    }
  }

})
