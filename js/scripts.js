function factorial(number) {
  if ( number < 0 ) {
    return -1;
  } else if ( number === 0 ) {
    return 1;
  } else {
    return (number * factorial(number -1));
  }
}

$(document).ready(function() {
  $('form#blanksnonfact').submit(function(event) {
    var total = 1;
    var num = $('input#num').val();
    num = parseInt(num);
    for ( var index = 1; index <= num; index += 1 ) {
      total *= index;
    }
    total = total.toString();
    $('#result').text(total);
    $('#blanksnonfact').hide();
    event.preventDefault();
  });
  $('form#blanksfact').submit(function(event) {
    var num1 = $('input#num1').val();
    num1 = parseInt(num1);
    var total1 = factorial(num1);
    total1 = total1.toString();
    $('#result1').text(total1);
    $('#blanksfact').hide();
    event.preventDefault();
  });
});
