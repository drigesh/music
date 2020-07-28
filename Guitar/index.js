
 for(var i=0;i<document.querySelectorAll(".guitar").length;i++){
  document.querySelectorAll(".guitar")[i].addEventListener("click",function(){
    playSound(this.innerHTML.toLowerCase());
    addAnimation(this.innerHTML.toLowerCase());

  });
}
document.addEventListener("keypress",function(event){
  playSound(event.key);
  addAnimation(event.key);
});
function playSound(e){
  switch( e ){
    case "a": var chordA = new Audio("chord-A.wav");
          chordA.play();
          break;
    // case "a":var tom2 = new Audio("sounds/tom-2.mp3");
    //       tom2.play();
    //       break;
    case "c":var chordC = new Audio("chord-C.wav");
          chordC.play();
          break;
    case "d":var chordD = new Audio("chord-D.wav");
          chordD.play();
          break;
    case "e":var chordE = new Audio("chord-E.wav");
          chordE.play();
          break;
    case "f":var chordF = new Audio("chord-F.wav");
          chordF.play();
          break;
    case "g":var chordG = new Audio("chord-G.wav");
          chordG.play();
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
