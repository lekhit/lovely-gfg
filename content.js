const right_bar =document.getElementsByClassName('rightBar');
var oldParent = document.querySelector("#home-page > div");
var newParent = document.querySelector("#home-page");
//console.log(right_bar);
document.querySelector("#home-page > div").removeChild(right_bar[0]);
document.querySelector("#home-page > div").removeChild(document.querySelector("#home-page > div > div.sideBar"));

function move() {
	while (oldParent.childNodes.length > 0) {
	  newParent.appendChild(oldParent.childNodes[0]);
	}
  }
move();