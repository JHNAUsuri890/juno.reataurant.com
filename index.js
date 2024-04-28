const decrese = document.getElementById('decreseBtn');
const reset = document.getElementById('resetBtn');
const increse = document.getElementById('increseBtn');
const countlabel = document.getElementById('countlabel');
let count = 0;
increseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreseBtn .onclick = function(){
    count --;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count=0;
    countlabel.textContent =count;
}









