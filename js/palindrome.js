$(function() {
  $("form").submit(function() {
    event.preventDefault();
    // var originalInput = $("#input").val();
    // var array = originalInput.match(/[a-z]+/gi);
    var smushedString = $("#input").val().match(/[a-z]+/gi).join("").toLowerCase();
    var reversedString = smushedString.split("").reverse().join("");
    if (smushedString === reversedString){
      alert("It's a palindrome!");
    } else {
      alert("Not a palindrome");
    }
  });
});
