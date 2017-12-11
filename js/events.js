//define functions here
function getIt(){
  $("p").on("click",function(){
    alert("Hey!");
  })
}

function frameIt(){
  $(".tasty").on("load", function(){
    
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
  $()
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
