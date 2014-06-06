window.onload = function(){
var att = {
  str: 10,
  dex: 10,
  con: 10,
  inte: 10,
  wis:10,
  cha:10,
  pp: prompt("How many Power Points will be used?")
};

var pop = document.querySelector('.powerPoints');
  pop.innerHTML="You have " + att.pp + " number of power points left.";

}
