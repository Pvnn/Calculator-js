let calculation=localStorage.getItem('calculation') || '';
if(calculation){
  displayCalculation()
  console.log(calculation);
}
function updateCalculation(userInput){
  calculation+=userInput
  console.log(calculation)
  displayCalculation()
  localStorage.setItem("calculation",calculation)
}
function displayCalculation(){
  document.querySelector('.js-calculation-line').innerHTML=calculation;
}
function clearCalculation(){
  calculation='';
  localStorage.removeItem('calculation')
  displayCalculation();
}
function calculate(){
  calculation=eval(calculation);
  console.log(calculation);
  displayCalculation();
  localStorage.setItem('calculation',calculation);
}