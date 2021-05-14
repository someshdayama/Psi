

function calculateBMI(){
    var wI=Number(document.getElementById("weightInput").value);
    var hI=Number(document.getElementById("heightInput").value);
    var bmiResult=(wI/(hI*hI));
    
    // document.getElementById("output").innerText=Math.round(bmiResult);
    alert(bmiResult);
}

