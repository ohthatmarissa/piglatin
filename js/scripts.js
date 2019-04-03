function translate(string) {
  var inputArray = string.split('');
  var vowels = ["a", "e", "i", "o", "u"];
  if(!vowels.includes(inputArray[0])) {
    inputArray.push(inputArray.shift());
  }
  string = inputArray.join('');
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
