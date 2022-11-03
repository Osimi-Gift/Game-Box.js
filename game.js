var pickedNumber = Math.floor((Math.random()*10)+1);
//return:refresh();
var start = document.getElementById("New");

document.getElementById("New").disabled = true;
document.getElementById("refresh").disabled = true;
document.getElementById("btn").disabled = false;
var gameOver = false;
var tryCheck = document.getElementById("msg1");
var Maxtrie = 5;
var count = 0;
var message = document.getElementById("msg");
document.getElementById("New").addEventListener("click", Game);
 //setTimeout(delay, 10000);
 var button = document.getElementById("btn");
 //var user = document.createElement("div")
 //user.setAttribute("id","maths");
 //document.body.appendChild(user)
 //pickedNumber.innerHTML= user;
 //var display = document.getElementById("display");
 

// display.innerHTML= count;
 
 //var handleIncrement = () =>{
  // count++
 //  display.innerHTML = count;
 //}
 console.log(pickedNumber);
 button.addEventListener("click", Game);
 
 function Game (){
 
   const userGuess =parseInt(document.getElementById("userput").value);
   //document.getElementById("msg").textContent = message;
   if( pickedNumber == userGuess ){
     message.textContent= "Correct 🎉🎉";
    
   alert(`Your score is ${count}`+1);
   document.getElementById("refresh").disabled = false;
   }
   else if(userGuess > pickedNumber){
     message.textContent= "Number too high"
     handleIncrement();
   }
   else if(userGuess < pickedNumber){
     message.textContent = "Number too low"
     handleIncrement();
   }
   else{
   message.textContent= "incorrect"
  handleIncrement();
   }
   Check();

 }
 function Check (){
   var Kick = document.getElementById("New")
      if( count == Maxtrie){
        gameOver = true;
        tryCheck.textContent = `You are out of turns, the number was  ${pickedNumber} 😔`;
        message.textContent="";
        Kick.disabled = false;
        
        document.getElementById("btn").disabled = true;
        
      }
      else{
        gameOver =false;
        tryCheck.textContent = "";
        
      }
      
}
 
/* function delay (){
   var text = document.getElementById("msg");
   text.innerHTML ="";
   
 }*/
 function handleIncrement(){
   count++
   console.log(count);
 }
 function restart(){
   window.location.replace("game.html");
 }
 
 function exit(){
   window.location.replace("index.html");
 }
 function refresh(){
   window.location.replace("game.html");
 }
 

/*var Game = {
	comparedNumber : randomNumber(),
	refreshNumber : function(){
		this.comparedNumber = randomNumber();
        alert(this.comparedNumber);
	},
	refreshButton : document.querySelector("#refresh-button")
}

function randomNumber(){
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	return randomNumber;    	
}

Game.refreshButton.addEventListener("click",Game.refreshNumber,false)
*/

 