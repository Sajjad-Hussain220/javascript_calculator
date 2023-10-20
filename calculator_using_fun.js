function calculator(num1, num2, ope) {
    var res;
    if (operator == "+") {
        res = num1 + num2
    } else if (operator == "-") {
        res = num1 - num2
    } else if (operator == "*") {
        res = num1 * num2
    } else if (operator == "/") {
        res = num1 / num2
    }
    return res;

}

var num1 = parseInt(prompt("input number 1"))
var num2 = parseInt(prompt("input number 2"))
var operator = prompt("input operator")
if ((!isNaN(num1)) && ((!isNaN(num1)))) {
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
        var res = calculator(num1, num2, operator)
        alert(num1 + " " + operator + " " + num2 + " = " + res)
    } else {
        document.write("you input wrong operator")
    }
}
else {
    document.write("you input wrong number ")
}