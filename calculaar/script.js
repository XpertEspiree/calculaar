      // Addition Function
 function add() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var c = a + b;
  document.getElementById("answer").value = c;
}

         // Subtraction Function
function sub() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var c = a - b;
  document.getElementById("answer").value = c;
}



         // Multiply Function
function multi() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var c = a * b;
  document.getElementById("answer").value = c;
}

        // Division Function
function div() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var c = a / b;
  document.getElementById("answer").value = c;
}

