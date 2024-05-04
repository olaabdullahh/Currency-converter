var result = document.getElementById('result');
var btn = document.getElementById('Convert');

btn.onclick = function(){
var num1 = +(document.getElementById('number1').value);
var selectedRadio = document.querySelector('input[name="Convert"]:checked');
var seletedValue = selectedRadio.value;
var line1 = document.createElement('div')
if (seletedValue === 'USD') {   
  line1.textContent = "USD To Lira = " + (num1*14000);
}else {
  line1.textContent = "Lira To USD = " + (num1/14000);
}
result.innerHTML = ""
result.appendChild(line1);
result.style.backgroundColor = "rgb(206, 206, 206)";
result.style.width = "300px";
result.style.height = "100px";
result.style.borderRadius = "5px";
result.style.textAlign = "center";
result.style.fontWeight = "bold"
}

// btn.onclick = function(){
//   var num1 = +(document.getElementById('number1').value);
//   var line1 = document.createElement('div')
//   if(document.getElementById('flexRadioDefault1').checked == true) {   
//     line1.textContent = "USD To Lira = " + (num1*14000);
//   }else {
//     line1.textContent = "Lira To USD = " + (num1/14000);
//   }
//   result.innerHTML = ""
//   result.appendChild(line1);
//   result.style.backgroundColor = "rgb(206, 206, 206)";
//   result.style.width = "300px";
//   result.style.height = "100px";
//   result.style.borderRadius = "5px";
//   result.style.textAlign = "center";
//   result.style.fontWeight = "bold"
//   }
  


