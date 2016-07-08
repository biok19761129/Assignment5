// THE CACLCULATOR II 
/*
window.addEventListener("load", init, false);

function init() {
    var btOne = document.getElementById("one");
    btOne.addEventListener("click", enter, false);
    
    var btTwo = document.getElementById("two");
    btTwo.addEventListener("click", enter, false);
    
    var btThree = document.getElementById("three");
    btThree.addEventListener("click", enter, false);
    
    var btFour = document.getElementById("four");
    btFour.addEventListener("click", enter, false);
    
    var btFive = document.getElementById("five");
    btFive.addEventListener("click", enter, false);
    
    var btSix = document.getElementById("six");
    btSix.addEventListener("click", enter, false);
    
    var btSeven = document.getElementById("seven");
    seven.addEventListener("click", enter, false);
    
    var btEight = document.getElementById("eight");
    btEight.addEventListener("click", enter, false);
    
    var btNine = document.getElementById("nine");
    btNine.addEventListener("click", enter, false);
    
    var btZero = document.getElementById("zero");
    btZero.addEventListener("click", enter, false);
    
    var btDivide = document.getElementById("divide");
    btDivide.addEventListener("click", enter, false);
    
    var btMultiply = document.getElementById("multiply");
    btMultiply.addEventListener("click", enter, false);
    
    var btSubtract = document.getElementById("subtract");
    btSubtract.addEventListener("click", enter, false);
    
    var btpPeriod = document.getElementById("period");
    btpPeriod.addEventListener("click", enter, false);
    
    var btAdd = document.getElementById("add");
    btAdd.addEventListener("click", enter, false);
    
    var btEqual = document.getElementById("equal");
    btEqual.addEventListener("click", calculate, false);
}


var calculate = function () {
    var total = window.eval(document.getElementById("result").value);
    document.getElementById("result").value = total;
};


function enter(val) {
    var theValue = val.target.value;
    var result = document.getElementById("result");
    result.value += theValue;
};
*/ 






//OTHER WAY
window.addEventListener("load", init, false);


function init(){ 
        var myTarget = document.querySelector("body");
        myTarget.addEventListener("click", function(e){
             if (e.target.value == "=") {
                    calculate();
                } else {
                    var theValue = e.target.value;
                    var result = document.getElementById("result");
                    result.value += theValue;
                };
        },false);
}

var calculate = function() {
        var total = window.eval(document.getElementById("result").value);
        document.getElementById("result").value = total;
    };



