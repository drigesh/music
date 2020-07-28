
 for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playSound(this.innerHTML);
    addAnimation(this.innerHTML);

  });
}
document.addEventListener("keypress",function(event){
  playSound(event.key);
  addAnimation(event.key);
});
function playSound(e){
  switch( e ){
    case "w": var tom1 = new Audio("tom-1.mp3");
          tom1.play();
          break;
    case "a":var tom2 = new Audio("tom-2.mp3");
          tom2.play();
          break;
    case "s":var tom3 = new Audio("tom-3.mp3");
          tom3.play();
          break;
    case "d":var tom4 = new Audio("tom-4.mp3");
          tom4.play();
          break;
    case "j":var snare = new Audio("snare.mp3");
          snare.play();
          break;
    case "k":var crash = new Audio("crash.mp3");
          crash.play();
          break;
    case "l":var kick = new Audio("kick-bass.mp3");
          kick.play();
          break;
    default: console.log(e);
  }
};
function addAnimation(currentkey){
  document.querySelector("."+ currentkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+ currentkey).classList.remove("pressed");
  },100);
}
