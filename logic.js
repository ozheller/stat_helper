var att = new Object();
  att.str = {
    value: 10,
    mod: 0
  };

  att.dex = {
    value: 10,
    mod: 0
  };

  att.con = {
    value: 10,
    mod: 0
  };

  att.inte = {
    value: 10,
    mod: 0
  };

  att.wis = {
    value: 10,
    mod: 0
  };

  att.cha = {
    value: 10,
    mod: 0
  };

  att.pp = prompt("How many Power Points will be used?");

document.querySelector('.powerPoints').innerHTML="You have " + att.pp + " number of power points left.";
