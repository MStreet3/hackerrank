function rotateRight(arr){
    return [arr.slice(-1), ...arr.slice(0,-1)];
} 

let btnNums = [...Array(9).keys()].map(num => num + 1);
let btnIds = btnNums.map(num => `btn${num}`);

// add buttons to the page
let container = document.getElementById('btns');
let btns = btnIds.map(btn => {
   let btnElem = document.createElement('button');
   btnElem.id = btn;
   btnElem.className = "btn";
   btnElem.innerHTML = btn.slice(-1);
   container.appendChild(btnElem);
   return btnElem;
})

// setup rotation of button numbers
let btn5 = document.getElementById('btn5');
let nums2Rotate = [1,2,3,6,9,8,7,4];
btns = nums2Rotate.map(num => btns[num-1]);

btn5.onclick = function(e){
   e.preventDefault();
   nums2Rotate = rotateRight(nums2Rotate);
   btns
   .forEach((btn, index) => {
       btn.innerHTML = nums2Rotate[index];        
   });
}
