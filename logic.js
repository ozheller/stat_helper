var characterBuilder = {};
characterBuilder.att = {};
var att = ['str', 'dex', 'con', 'inte', 'wis', 'cha'];
for(var x in att){
	characterBuilder.att[att[x]] = {
		value: 11,
		mod: 0
	}
}

/*



characterBuilder.att = ['str', 'dex', 'con', 'inte', 'wis', 'cha'];
  characterBuilder.att.str = {
    value: 10,
    mod: 0
  };

  characterBuilder.att.dex = {
    value: 10,
    mod: 0
  };

  characterBuilder.att.con = {
    value: 10,
    mod: 0
  };

  characterBuilder.att.inte = {
    value: 10,
    mod: 0
  };

  characterBuilder.att.wis = {
    value: 10,
    mod: 0
  };

  characterBuilder.att.cha = {
    value: 10,
    mod: 0
  };
*/
characterBuilder.pp = 15;

characterBuilder.init=function(){
	var pps = document.querySelector('.powerPoints');
	pps.value=characterBuilder.pp;
	pps.onkeyup=characterBuilder.ppChange;
	pps.disabled=false;
		// for (var x = 0, characterBuilder.att.lenght, x++){
			// document.querySelector(this).innerHTML=this.value; 
		// }
	for(var x in characterBuilder.att){
		console.log(x);
		console.log(characterBuilder.att[x].value);
		
	}	
};

characterBuilder.ppChange = function ppChange(e){
	var pps = e.currentTarget;
	console.log(e.currentTarget);
	characterBuilder.pp=pps.value;
	console.log(characterBuilder.pp);
}

characterBuilder.init();


//document.querySelector('.str', '.dex', '.con', '.inte', '.wis', '.cha');



	


console.log(characterBuilder.att.str);
console.log(characterBuilder.pp);