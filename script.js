let raceNumber=Math.floor(Math.random()*1000);
let earlyRegister=prompt("Did you register early? -(Yes/No)");
let lower=earlyRegister.toLowerCase();

if (earlyRegister="yes"){
  earlyRegister===true;
}else if(earlyRegister=="no"){
  earlyRegister===false;
}else{
  alert("Plaese enter valid value")
}

let runnerAge=prompt("Please enter your age!");

if (runnerAge>18 && earlyRegister===yes){
  raceNumber+=1000;
  }

  if (runnerAge>18 && earlyRegister) {
    console.log("You will race at 9:30am. "+raceNumber+" - this is your race number");
  } else if( runnerAge>18 && !earlyRegister ){
    console.log("You will race at 11:00am. "+raceNumber+" - this is your race number");
   }else if(runnerAge<18){
    console.log("You will race at 12:30pm. "+raceNumber+" - this is your race number");
  }else{
    console.log("Please to see the registration desk")
  }