for(i=0;i<document.querySelectorAll(".drum").length;i++){
document.getElementsByClassName("drum")[i].addEventListener("click",function(){
  fun(this.innerHTML);
  animation(this.innerHTML);
});
}

document.addEventListener("keypress",function (event){
  fun(event.key);
  animation(event.key);
});

function fun(clicks){

switch (clicks) {
  case "w":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
    break;
 case "a":
    var audio=new Audio("sounds/kick-bass.mp3")
    audio.play();
break;
  case "s":
     var audio=new Audio("sounds/snare.mp3")
     audio.play();
break;
   case "d":
      var audio=new Audio("sounds/tom-1.mp3")
      audio.play();
break;
    case "j":
       var audio=new Audio("sounds/tom-2.mp3")
       audio.play();
  break;
  case "k":
        var audio=new Audio("sounds/tom-3.mp3")
        audio.play();
      break;
      case "l":
         var audio=new Audio("sounds/tom-4.mp3")
         audio.play();
       break;
}

}

function animation(curkey){
 document.querySelectorAll("." + curkey)[0].classList.add("pressed");
 setTimeout(function(){document.querySelectorAll("." + curkey)[0].classList.remove("pressed");},200);
}
