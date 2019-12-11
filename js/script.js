//what we do
$(document).ready(function () {
  $("#design").hover(function () {
    $("#des").show();
    $("#design").hide();
    $(".de").hide();

  });
  $("#des").mouseleave(function () {
    $("#design").show();
    $("#des").hide();
    $(".de").show();

  });
});
$(document).ready(function () {
  $("#deve").hover(function () {
    $("#dev").show();
    $("#deve").hide();
    $(".de").hide();
  });
  $("#dev").mouseleave(function () {
    $("#deve").show();
    $("#dev").hide();
    $(".de").show();
  });
});
$(document).ready(function () {
  $("#prodman").hover(function () {
    $("#management").show();
    $("#prodman").hide();
    $(".de").hide();
  });
  $("#management").mouseleave(function () {
    $("#prodman").show();
    $("#management").hide();
    $(".de").show();

  });
});