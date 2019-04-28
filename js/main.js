$(document).ready( function() {

  const menuPos = $(".menu").position();
  stickyMenuBar($(".menu"), menuPos);

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


 // const menuPos = $(".menu").position();

  // Menu
  $(window).scroll( function() {
    stickyMenuBar($(".menu"), menuPos)
  });


  function stickyMenuBar(navbar, pos) {
    // if the position of the menu hits the top of the page when scrolling down
    if ($(window).scrollTop() >= pos.top) {
      console.log($(window).scrollTop());
      navbar.addClass("sticky");
    }
    // if the scroll happens above the the position of the menu
    else {
      navbar.removeClass("sticky");
    }
  }

    // -----Contact Form-----
    $("#submit-msg").click(function () {

      // Declare variables used for simple form validation
      var firstName = $("#form_name").val();
      var lastName = $("#form_lastname").val();
      var eMail = $("#form_email").val();
      var phoneNo = $("#form_phone").val();
      var message = $("#form_message").val();

      // Check for empty fields of required info
      if (firstName == '' || lastName == '' || email == '' ||message == '') {

      // Define Alerts
        swal({
            title: "Oops!",
            text: "Please complete the required fields so we can contact you",
            icon: "warning",
            button: "Close",
          });
      } else {
        // Clear input fields
        $("#form_name").val('');
        $("#form_lastname").val('');
        $("#form_email").val('');
        $("#form_phone").val('');
        $("#form_message").val('');

        swal({
          title: "Awesome, thanks!",
          text: "We look forward to speaking with you!",
          icon: "success",
          button: "Close",
        });
      }

    });

})
