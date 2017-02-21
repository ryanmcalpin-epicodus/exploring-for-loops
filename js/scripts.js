$(function() {
  $("form").submit(function() {
    event.preventDefault();

    var startNumber = $("#start-number").val();
    var total = startNumber;

    for (var i = startNumber; i > 1; i--){
      total = total * (i - 1);
    }
    alert(total);
  });
});
