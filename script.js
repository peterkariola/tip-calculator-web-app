let bill = document.querySelector('.bill')
let numberPeople = document.querySelector('.number-people')
let fivePercentCalc = document.querySelector('.five-percent-calc')
let tenPercentCalc = document.querySelector('.ten-percent-calc')
let fifteenPercentCalc = document.querySelector('.fifteen-percent-calc')
let twentyFivePercentCalc = document.querySelector('.twentyfive-percent-calc')
let fiftyPercentCalc = document.querySelector('.fifty-percent-calc')
let errorInput1 = document.querySelector('.error-input-1')
let errorInput2 = document.querySelector('.error-input-2')
let tipAmount = document.querySelector('.tip-amount')
let  resetBtn = document.querySelector('.reset')
let totalAmount = document.querySelector('.total-amount')
let customInputs = document.getElementsByName('custom-inputs')[0]


function tipCalculator (billValue, billPercent, numberPeople){
 let billCalc =  (billValue * billPercent ) / numberPeople ;
 return billCalc; 
}

function tipest(billPercent) {
 if (bill.value == '' || bill.value < 0.1 ||
   numberPeople.value == '' || numberPeople.value < 0.1 ){
     if(bill.value == '' || bill.value < 0.1) {
    bill.style.border = '1px solid red'
    errorInput1.style.display = 'block'
     }

  else if(numberPeople.value == '' || numberPeople.value < 0.1){
   numberPeople.style.border = '1px solid red'
   errorInput2.style.display = 'block'
    }
   }
   
   else if(numberPeople.value >= 0.1 && bill.value >= 0.1){
    let number = tipCalculator(Number(bill.value), billPercent, Number(numberPeople.value))
    tipAmount.textContent = Number(number.toFixed(2));
   numberPeople.style.border = 'none'
   bill.style.border = 'none'
   errorInput1.style.display = 'none'
   errorInput2.style.display = 'none'
   let defaultAmount = Number(tipAmount.textContent.substring(1))
   console.log(tipAmount.textContent.substring(1),)
   // totalAmount.textContent = tipAmount.textContent 
   console.log(defaultAmount)
   // if (defaultAmount > totalAmount.textContent.substring(1)) {
     tipAmount.addEventListener("DOMNodeInserted", function() {
       
   totalAmount.textContent = (Number(totalAmount.textContent.substring(1)) 
   + Number(tipAmount.textContent)).toFixed(2)
     }
     )}
}

fivePercentCalc.addEventListener('click', function(event){
 event.preventDefault();
 tipest(0.05)
})

tenPercentCalc.addEventListener('click', function(){
 tipest(0.10)
})

fifteenPercentCalc.addEventListener('click', function(){
 tipest(0.15)
})

twentyFivePercentCalc.addEventListener('click', function(){
 tipest(0.25)
})

fiftyPercentCalc.addEventListener('click', function(){
 tipest(0.50)
})

customInputs.addEventListener('keyup', function(event){
 //  let number = tipCalculator(Number(bill.value), 0.50, Number(numberPeople.value))
 //  tipAmount.textContent = number.toFixed(2)
 if(event.keyCode === 13){
   event.preventDefault();
   tipest(Number(customInputs.value)/100)
 }
})




resetBtn.addEventListener('click', function(){
 tipAmount.textContent = '$0.00'
 totalAmount.textContent = '$0.00'
 bill.value = 0
 numberPeople.value = 0 
 customInputs.placeholder = 'Custom'
 customInputs.value = customInputs.placeholder
 numberPeople.style.border = 'none'
 errorInput2.style.display = 'none'
 errorInput1.style.display = 'none'
 bill.style.border = 'none'
 console.log(customInputs.placeholder)
})