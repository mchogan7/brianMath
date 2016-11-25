var num1 = 0;
var num2 = 0;
var greatestNumber = 0;
combined = 0;
answer = 0;

function brianMath(){
    combined = "" + num1 + num2
    console.log(combined);
    if(num1 > num2){
        greatestNumber = num1;
    } else {
        greatestNumber = num2;
    }
    answer = combined * greatestNumber

    $('.answer').val(answer);
}

brianMath();


$('.button').click(function(){
   num1 = $('.number1').val()
num2 = $('.number2').val()
brianMath()
num1 = ""
num2 = ""})