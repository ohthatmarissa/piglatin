function translate(string) {
  string = string.concat("-ay");
  return string;
};


$().ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#string").val();
    var result = translate(userInput);
    $("#result p").text(result);
  })
});
