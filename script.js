alert("Hello Alchoholic");
let num1, num2;
let mainResult;
num1 = Math.floor((Math.random() * 100) + 1);
num2 = Math.floor((Math.random() * 100) + 1);
num3 = Math.floor((Math.random() * (3 - 0)));

switch (num3) {
  case 0:
  {
    var oper = "+";
    var result = num1 + num2;
    break;
  }

  case 1:
  {
    var oper = "-";
    var result = num1 - num2;
    break;
  }
  case 2:
  {
    var oper = "*";
    var result = num1 * num2;
    break;
  }
  case 3:
  {
    var oper = "/";
    var result = num1 / num2;
    break;
  }
};

prompt(String("Is it correct? : " + num1 + " " + oper + " " + num2 + " " + " = " + result), mainResult);
if (mainResult == result){
  alert("Your are not an Alchocholic");

}
else if (mainResult != result){
alert("Uppps");
}

