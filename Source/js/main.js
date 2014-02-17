$(document).ready(function() {
  /* validation */
  var validator = new FormValidator('#contactForm', [{
    name: 'email',
    display: 'Email',
    rules: 'required|valid_email'
  }], function(errors, event) {
    if (errors.length > 0) {
      var SELECTOR_ERRORS = $('.error_box'),
        SELECTOR_SUCCESS = $('.success_box');
        
      if (errors.length > 0) {
          SELECTOR_ERRORS.empty();
          
          for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
              SELECTOR_ERRORS.append(errors[i].message + '<br />');
          }
          
          SELECTOR_SUCCESS.css({ display: 'none' });
          SELECTOR_ERRORS.fadeIn(200);
      } else {
          SELECTOR_ERRORS.css({ display: 'none' });
          SELECTOR_SUCCESS.fadeIn(200);
      }
      
      if (event && event.preventDefault) {
          event.preventDefault();
      } else if (event) {
          event.returnValue = false;
      }
    }
  });

  // hide messages 
  $("#error").hide();
  $("#sent-form-msg").hide();

  // on submit...
  $("#contactForm").submit(function() {
    // send mail php
    var sendMailUrl = $("#sendMailUrl").val();

    //vars
    var email = $("#email").val();
    
    var data = { "email":email };

    // ajax
    $.ajax({
      type:"POST",
      url: sendMailUrl,
      data: data,
      success: function(){
        $("#sent-form-msg").fadeIn();
        $("#contactForm").fadeOut();      
      }
    });
    return false;
  });
});