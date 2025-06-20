var range = 1 / (window.innerWidth / 3);
var vw = range * window.innerHeight;
if(window.innerWidth < window.innerHeight){
  range = 1 / (window.innerHeight/ 2)
  vw = range * window.innerWidth;
}


document.documentElement.style.setProperty('--vw-scale', `${vw}`);
document.documentElement.style.setProperty('--v-margin-top',`${window.innerWidth* 0.2}px`);

window.addEventListener('resize', () => {
  if(window.innerWidth < window.innerHeight){
    document.documentElement.style.setProperty('--vw-scale', `${range * window.innerWidth}`);
  } else {
    document.documentElement.style.setProperty('--vw-scale', `${range * window.innerHeight}`);
  }
  document.documentElement.style.setProperty('--v-margin-top', `${Math.max(((0.14 * window.innerHeight) / (window.innerWidth * 0.28)),window.innerWidth*0.14)}px`);
});
