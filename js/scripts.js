$(function() {
  $("#blanks form").submit(function(event) {
      var nameInput = $("#name").val();
      var dobInput = $("#dob").val();
      var foodInput = $("#food").val();
      var musicInput = $("#music").val();
      var mealInput = $("#meal").val();
      var timeInput = $("input:radio[name=time]:checked").val();
      var colorInput = $("#color").val();

      $(".name").text(nameInput);
      $(".dob").text(dobInput);
      $(".food").text(foodInput);
      $(".music").text(musicInput);
      $(".meal").text(mealInput);
      $(".time").text(timeInput);
      $("#favcolor").css("background-color", colorInput);

      $("#confirmation").show();

      event.preventDefault();
  });

  $("button#close").click(function() {
    $("#confirmation").hide();
  });

  $("button#reset").click(function() {
    $(this).closest("form").find("input[type=text], textarea").val("");
    $(this).closest("form").find("input[type=date], textarea").val("");
    // $(this).closest("form").find("input:selected").removeAttr("selected");
    // $("#breakfast").attr("selected");
    $(this).closest("form").find("input:checked").removeAttr("checked");
    $(this).closest("form").find("input[type=color]").val("#000000");
    $("#confirmation").hide();
  });
});
