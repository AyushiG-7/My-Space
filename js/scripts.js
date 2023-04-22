const password = $(".password");
$("#password").click(function () {
  if (password.prop("type") == "password") {
    $(".password").attr("type", "text");
    $("#password").removeClass("zmdi zmdi-eye-off");
    $("#password").addClass("zmdi zmdi-eye");
  } else {
    $(".password").attr("type", "password");
    $("#password").removeClass("zmdi zmdi-eye");
    $("#password").addClass("zmdi zmdi-eye-off");
  }
});

const pass = $(".pass");
$("#pass").click(function () {
  if (pass.prop("type") == "password") {
    $(".pass").attr("type", "text");
    $("#pass").removeClass("zmdi zmdi-eye-off");
    $("#pass").addClass("zmdi zmdi-eye");
  } else {
    $(".pass").attr("type", "password");
    $("#pass").removeClass("zmdi zmdi-eye");
    $("#pass").addClass("zmdi zmdi-eye-off");
  }
});

const re_pass = $(".re_pass");
$("#re_pass").click(function () {
  if (re_pass.prop("type") == "password") {
    $(".re_pass").attr("type", "text");
    $("#re_pass").removeClass("zmdi zmdi-eye-off");
    $("#re_pass").addClass("zmdi zmdi-eye");
  } else {
    $("#re_pass").removeClass("zmdi zmdi-eye");
    $("#re_pass").addClass("zmdi zmdi-eye-off");
    $(".re_pass").attr("type", "password");
  }
});
