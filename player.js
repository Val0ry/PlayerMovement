const player = document.getElementById('player');
const moveSize = 20;
const plate = document.getElementById('gameContainer')
const plateW = plate.offsetWidth;
const plateH = plate.offsetHeight;

let playerWalk = 0;


document.addEventListener('keydown', function(event) {
 if (event.code == 'ArrowUp') {
     playerWalk = playerWalk + 1;
     const newPosY = player.offsetTop - moveSize;
 if (newPosY >= 0) {
    player.style.top = newPosY + "px";
 }
 } else if (event.code == 'ArrowRight') {
     playerWalk = playerWalk + 1;
     const newPosX = player.offsetLeft + moveSize;
      if (newPosX <= plateW - player.offsetWidth) {
     player.style.left = newPosX + "px";
 }
 } else if (event.code == 'ArrowDown') {
     playerWalk = playerWalk + 1;
     const newPosY = player.offsetTop + moveSize;
     if (newPosY <= plateH - player.offsetHeight) {
     player.style.top = newPosY + "px";
 }
 } else if (event.code == 'ArrowLeft') {
     playerWalk = playerWalk + 1;
     const newPosX = player.offsetLeft - moveSize;
      if (newPosX >= 0) {
     player.style.left = newPosX + "px";
 }
}
});