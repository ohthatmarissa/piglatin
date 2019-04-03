function translate(string) {
  var inputArray = string.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var consonantCluster = ['-'];
  if(inputArray[0]=== 'y') {
    consonantCluster.push(inputArray.shift());
  } else while(!vowels.includes(inputArray[0])) {
    if(inputArray[0] === 'q' && inputArray[1] === 'u') {
      consonantCluster.push(inputArray.shift());
      consonantCluster.push(inputArray.shift());
    } else {
      consonantCluster.push(inputArray.shift());
    }
  }
  string = inputArray.join('') + consonantCluster.join('');
  string = string.concat('ay');
  return string;
}


$().ready(function() {
  $('form#pigLatin').submit(function(event) {
    event.preventDefault();
    var userInput = $('#string').val();
    var result = translate(userInput);
    $('#result p').text(result);
  })
});
