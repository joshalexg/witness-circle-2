$(document).ready(function() {

  $("#submit-msg").click(function () {

    // Declare variables used for simple form validation
    var firstName = $("#form_name").val();
    var lastName = $("#form_lastname").val();
    var eMail = $("#form_email").val();
    var phoneNo = $("#form_phone").val();
    var message = $("#form_message").val();

    // Check for empty fields of required info
    if (firstName == '' || lastName == '' || message == '') {

    // Define Alerts
      swal({
          title: "Oops!",
          text: "Please complete the required fields so we can contact you",
          icon: "warning",
          button: "Close",
        });
    } else {
      swal({
        title: "Awesome, thanks!",
        text: "We look forward to speaking with you!",
        icon: "success",
        button: "Close",
      });
    }
    // Clear input fields
    $("#form_name").val('');
    $("#form_lastname").val('');
    $("#form_email").val('');
    $("#form_phone").val('');
    $("#form_message").val('');

  });
});
