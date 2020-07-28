
 for(var i=0;i<document.querySelectorAll(".pia").length;i++){
  document.querySelectorAll(".pia")[i].addEventListener("click",function(){
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
    case "c": var temp = new Audio("c.mp3");
          temp.play();
          break;
    case "d":var temp = new Audio("d.mp3");
          temp.play();
          break;
    case "e":var temp = new Audio("e.mp3");
          temp.play();
          break;
    case "f":var temp = new Audio("f.mp3");
          temp.play();
          break;
    case "g":var temp = new Audio("g.mp3");
          temp.play();
          break;
    case "a":var temp = new Audio("a.mp3");
          temp.play();
          break;
    case "b":var temp = new Audio("b.mp3");
          temp.play();
          break;
    case "C": var temp = new Audio("c1.mp3");
          temp.play();
          break;
    case "D": var temp = new Audio("d1.mp3");
          temp.play();
          break;
    case "F": var temp = new Audio("f1.mp3");
          temp.play();
          break;
    case "G": var temp = new Audio("g1.mp3");
          temp.play();
          break;
    case "A": var temp = new Audio("a1.mp3");
          temp.play();
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
