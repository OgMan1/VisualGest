$(document).ready(function () {
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() > 50) {
      // check if user scrolled more than 50 from top of the browser window
      $(".navbar").css({
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        borderBottom: "1px solid black",
      });
    } else {
      $(".navbar").css({
        backgroundColor: "transparent",
        borderBottom: "none",
      });
    }
  });

  $("#picture1").mouseover(function () {
    $("#picture1").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture1").mouseleave(function () {
    $("#picture1").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture2").mouseover(function () {
    $("#picture2").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture2").mouseleave(function () {
    $("#picture2").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture3").mouseover(function () {
    $("#picture3").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture3").mouseleave(function () {
    $("#picture3").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture4").mouseover(function () {
    $("#picture4").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture4").mouseleave(function () {
    $("#picture4").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture5").mouseover(function () {
    $("#picture5").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture5").mouseleave(function () {
    $("#picture5").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture6").mouseover(function () {
    $("#picture6").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture6").mouseleave(function () {
    $("#picture6").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture7").mouseover(function () {
    $("#picture7").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture7").mouseleave(function () {
    $("#picture7").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });

  $("#picture8").mouseover(function () {
    $("#picture8").css({
      backgroundImage: "url('img/view-more.png')",
      backgroundColor: " rgb(8, 8, 8, 0.25)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    });
  });
  $("#picture8").mouseleave(function () {
    $("#picture8").css({
      backgroundImage: "",
      height: "40vh",
      backgroundSize: "cover",
    });
  });
});
