//define functions here
function getIt(){
  $("p").on("click",function(){
    alert("Hey!");
  })
}

function frameIt(){
  $("img").on("load", function(){
    this.class = ".tasty"
  })
}

function pressIt(){
 $("form").on("keydown",function(e){
   if(e.which == 71){
     alert("Warning!")
   }
 }) 
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
